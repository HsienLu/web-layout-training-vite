import{u as g,S as c,b,l as p,m as h}from"./main-b6541567.js";import"./header-1de78961.js";g||c.fire({title:"請先登入會員",icon:"warning"}).then(()=>{console.log("Wait"),location.href="index.html"});const L=document.querySelector("#buildTeamName"),f=document.querySelector("#buildTeamTime"),s=document.querySelectorAll("#buildTeamTagGroup .buildTeamTag"),k=document.querySelectorAll("#noticeGroup .messageItem");let r=h,n="",m="",d="",u=["","","","",""];console.log(data);L.addEventListener("input",e=>{n=e.target.value});f.addEventListener("input",e=>{m=e.target.value});s.forEach(e=>{e.addEventListener("click",a=>{let o=[...e.classList].find(l=>(console.log(l),l==="buildTeamTagActive"));console.log(o),o===void 0?(s.forEach(l=>{l.classList.remove("buildTeamTagActive")}),e.classList.add("buildTeamTagActive")):e.classList.remove("buildTeamTagActive"),d=e.dataset.rank})});k.forEach((e,a)=>{e.addEventListener("input",i=>{console.log(i.target.value),u[a]=i.target.value})});let t=0,T=[0,0,0,0,0];switch(data.likePosition){case"TOP":t=0;break;case"JG":t=1;break;case"MID":t=2;break;case"AD":t=3;break;case"SUP":t=4;break}T[t]=parseInt(r);console.log(t);addTeamButtom.addEventListener("click",()=>{let e={userId:r,teamName:n,playTime:m,rankLimt:d,teamNotice:u,teamMerberId:T,createAt:`${new Date}`};b.post("http://localhost:3000/teams",e).then(a=>{console.log(a),c.fire({title:"建立隊伍成功",icon:"success"}).then(()=>{location.href=`${p}/LOL-TeamMaster/pages/teamList.html`})})});