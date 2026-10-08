const Wild={draft:{title:'',text:'',image:'',alt:''},
status(message){document.getElementById('wildStatus').textContent=message},
init(){const w=this,$=id=>document.getElementById(id);
for(const [id,key] of [['wildTitle','title'],['wildText','text'],['wildAlt','alt']])$(id).oninput=()=>{w.draft[key]=$(id).value;render()};
let request=0;
$('wildImage').onchange=async()=>{const current=++request;const file=$('wildImage').files[0];if(!file)return;if(!['image/png','image/jpeg','image/gif','image/webp'].includes(file.type)||file.size>8*1024*1024){w.status('Choose a PNG, JPEG, GIF, or WebP image under 8 MB.');$('wildImage').value='';return}try{const data=await new Promise((resolve,reject)=>{const r=new FileReader();r.onload=()=>resolve(r.result);r.onerror=reject;r.readAsDataURL(file)});await new Promise((resolve,reject)=>{const img=new Image();img.onload=resolve;img.onerror=reject;img.src=data});if(current!==request)return;w.draft.image=data;$('removeImage').hidden=false;w.status('Image added.');render()}catch(e){if(current===request)w.status('The image could not be opened. Try another image.')}};
$('removeImage').onclick=()=>{request++;w.draft.image='';$('wildImage').value='';$('removeImage').hidden=true;w.status('Image removed.');render()};
$('newWild').onclick=()=>{request++;w.draft={title:'',text:'',image:'',alt:''};for(const id of ['wildTitle','wildText','wildAlt','wildImage'])$(id).value='';$('removeImage').hidden=true;w.status('Wild card cleared.');render()};
}};
