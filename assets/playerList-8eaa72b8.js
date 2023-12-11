import{u as h,b as n,a as l,m as s,S as m}from"./main-b6541567.js";import"./header-1de78961.js";h||(location.href="index.html");let d=[],i=[],g=0,o=$("#pagination");const v=document.querySelector("#playerThumbDesc"),C=document.querySelector("#playerThumbAsc"),c=document.querySelector(".jsPlayerWrap"),y=document.querySelector("#playerRankSelect"),x=document.querySelector(".jsPlayerSearch"),w=document.querySelector(".jsPlayerSearchBtn");function k(a){let t="";a.forEach(r=>{t+=`<div class="playerListCard col-lg-4 col-md-6 col-12 mt-18">
        <div
          class="memberCard border border-primary w-100 h-100 greenShadow bg-dark"
          style="border-radius: 2px"
        >
          <div class="meber-card-top">
            <div class="member-avatar position-relative w-100">
              <div class="avatar w-100">
                <img
                  src="../assets/images/avatar/${r.avatar}.png"
                  alt=""
                  class="member-avatar-style"
                  style="height: 300px; object-fit: cover"
                />
              </div>
      
              <div class="member-avatar-style position-absolute bottom-0"></div>
      
              <div class="metal position-absolute" style="width: 85px; height: 65px">
                <div class="parallelogram">
                  <div
                    class="parallelogram-content-avatar"
                    style="
                      background-image: url(../assets/images/ranking/${r.userRank}.png);
                      background-size: cover;
                      background-position: center;
                      width: 85px;
                      height: 60px;
                    "
                  ></div>
                </div>
              </div>
            </div>
          </div>
      
          <h4 class="mt-12 text-center mb-4">${r.username}</h4>
          <div class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap">
            <div class="tag bage bage-text">${r.likePosition}</div>
           
          </div>
          <div class="thumb my-6">
            <p class="thum-text text-center">
            ${r.thumb}
            <span><i class="fa-regular fa-thumbs-up"></i></span>
            </p>
          </div>
          <div class="button-all d-flex justify-content-center gap-4 mb-8">
            <button class="jsAddFriendBtn btn border border-primary text-primary" style="width: 40%" data-friendInvite="${r.id}">
              加為好友
              <span data-friendInvite="${r.id}">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  data-friendInvite="${r.id}"
                >
                  <path
                    d="M13 11C13.5933 11 14.1734 10.8241 14.6667 10.4944C15.1601 10.1648 15.5446 9.69623 15.7716 9.14805C15.9987 8.59987 16.0581 7.99667 15.9424 7.41473C15.8266 6.83279 15.5409 6.29824 15.1213 5.87868C14.7018 5.45912 14.1672 5.1734 13.5853 5.05765C13.0033 4.94189 12.4001 5.0013 11.8519 5.22836C11.3038 5.45543 10.8352 5.83994 10.5056 6.33329C10.1759 6.82664 10 7.40666 10 8C10 8.79565 10.3161 9.55871 10.8787 10.1213C11.4413 10.6839 12.2044 11 13 11ZM13 7C13.1978 7 13.3911 7.05865 13.5556 7.16853C13.72 7.27841 13.8482 7.43459 13.9239 7.61732C13.9996 7.80004 14.0194 8.00111 13.9808 8.19509C13.9422 8.38907 13.847 8.56726 13.7071 8.70711C13.5673 8.84696 13.3891 8.9422 13.1951 8.98079C13.0011 9.01937 12.8 8.99957 12.6173 8.92388C12.4346 8.84819 12.2784 8.72002 12.1685 8.55557C12.0586 8.39112 12 8.19778 12 8C12 7.73478 12.1054 7.48043 12.2929 7.29289C12.4804 7.10536 12.7348 7 13 7ZM17.11 10.86C17.6951 10.021 18.0087 9.02282 18.0087 8C18.0087 6.97718 17.6951 5.97897 17.11 5.14C17.3976 5.04741 17.6979 5.00018 18 5C18.7956 5 19.5587 5.31607 20.1213 5.87868C20.6839 6.44129 21 7.20435 21 8C21 8.79565 20.6839 9.55871 20.1213 10.1213C19.5587 10.6839 18.7956 11 18 11C17.6979 10.9998 17.3976 10.9526 17.11 10.86ZM13 13C7 13 7 17 7 17V19H19V17C19 17 19 13 13 13ZM9 17C9 16.71 9.32 15 13 15C16.5 15 16.94 16.56 17 17M24 17V19H21V17C20.9766 16.2566 20.8054 15.5254 20.4964 14.8489C20.1873 14.1724 19.7466 13.5643 19.2 13.06C24 13.55 24 17 24 17ZM8 12H5V15H3V12H0V10H3V7H5V10H8V12Z"
                    fill="#D6EEFF"
                    data-friendInvite="${r.id}"
                  />
                </svg>
              </span>
            </button>
            <button
              class="btn border border-primary text-primary"
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              style="width: 40%"
              data-teamInvite="${r.id}"
            >
              隊伍邀請
              <span><i class="fa-regular fa-paper-plane"></i></span>
            </button>
          </div>
        </div>
      </div>
      `}),c.innerHTML=t}function u(a,t){t.pagination({dataSource:a,totalNumber:a.length,pageSize:9,prevText:"&#9668",nextText:"&#9658",callback:(r,e)=>{k(r)}})}function b(){n.get(`${l}/users?_embed=friendLists`).then(a=>{let t;t=a.data.find(e=>e.id===s),t=t.friendLists,t.forEach(e=>{d.push(e.friendId)}),i=a.data.filter(e=>!d.includes(e.id)).filter(e=>e.id!==s),u(i,o)}).catch(a=>{console.log(a)})}C.addEventListener("click",a=>{a.preventDefault(),c.innerHTML="",n.get(`${l}/users?_embed=friendLists&_sort=thumb&_order=asc`).then(t=>{i=t.data.filter(e=>!d.includes(e.id)).filter(e=>e.id!==s),u(i,o)}).catch(t=>{console.log(t)})});v.addEventListener("click",a=>{a.preventDefault(),c.innerHTML="",n.get(`${l}/users?_embed=friendLists&_sort=thumb&_order=desc`).then(t=>{i=t.data.filter(e=>!d.includes(e.id)).filter(e=>e.id!==s),u(i,o)}).catch(t=>{console.log(t)})});y.addEventListener("click",a=>{if(a.preventDefault(),a.target.getAttribute("class")!=="dropdown-item")return;let r=a.target.getAttribute("data-rank");c.innerHTML="",n.get(`${l}/users?_embed=friendLists&userRank=${r}`).then(e=>{i=e.data.filter(p=>!d.includes(p.id)).filter(p=>p.id!==s),u(i,o)}).catch(e=>{console.log(e)})});w.addEventListener("click",a=>{a.preventDefault();let t;if(t=x.value,t===""){b();return}n.get(`${l}/users?username=${t}`).then(r=>{i=r.data.filter(f=>!d.includes(f.id)).filter(f=>f.id!==s),u(i,o)}).catch(r=>{console.log(r)})});c.addEventListener("click",a=>{g=0;let t=Number(a.target.getAttribute("data-friendinvite"));t&&(n.get(`${l}/friendLists`).then(r=>{if(r.data.forEach(e=>{e.userId===s&&e.friendId===t&&(g=1)}),g){m.fire({icon:"error",title:"已經是好友",showConfirmButton:!1,timer:2e3,background:"#060818",color:"#D6EEFF"});return}}),m.fire({title:"確定要加入好友?",icon:"question",background:"#060818",color:"#D6EEFF",showCancelButton:!0,customClass:{confirmButton:"bg-white text-dark me-4",cancelButton:"border border-2 border-white bg-transparent"},confirmButtonText:"確定",cancelButtonText:"取消"}).then(r=>{r.isConfirmed&&n.post(`${l}/friendLists`,{userId:s,friendId:t,status:1}).then(e=>{m.fire({icon:"success",title:"已送出好友邀請",showConfirmButton:!1,timer:2e3,background:"#060818",color:"#D6EEFF"}),b()}).catch(e=>{console.log(e)})}))});b();
