if (!userIsLogin) location.href = "index.html";
import axios from "axios";
import { api_path, userIsLogin, memberId } from "./config";

let data;
let commentData = [];
let friendListData = [];
let banListData = [];
let historicalTeamListData = [];
let positionSelected;
const commentList = document.querySelector(".evaluateCard");
const friendList = document.querySelector(".friendCard");
const banList = document.querySelector(".blackCard");
const historicalTeamList = document.querySelector(".historicalCard");

function init() {
  getCommentList();
  getFriendList();
  getBanList();
}
init();

function getCommentList() {
  axios.get(`${api_path}/comments?_expand=user`).then((res) => {
    data = res.data;
    console.log(data);
    renderCommentList();
    // for (let i = 0; i < data.length; i++) {
    //   commentData.push(data[i].user);
    // }
    positionSelected = document.querySelectorAll("[data-likePosition]");
    console.log(positionSelected);
    // positionSelected = positionSelected.getAttribute("data-likePosition");

    // commentData.forEach((item) => {
    //   if (positionSelected.value === item.likePosition){
    //     positionSelected.add("bageGroup");
    //   }
    // })
  });
}

function renderCommentList() {
  let str = "";
  data.forEach((item, index) => {
    str += `
    <div class="swiper-slide memberEvaluateCard border border-2 border-radius border-primary w-20 bg-dark blueShadow">
      <div class="meber-card-top">
        <div class="member-avatar position-relative">
          <img
            src="../assets/images/avatar/${item.user.avatar}.png"
            alt=""
            class="member-avatar-style"
            style="width: 306px; height: 306px"/>
          <div class="member-avatar-style position-absolute bottom-0"></div>

          <div
            class="metal position-absolute"
            style="width: 82px; height: 60px">
            <div class="parallelogram-1">
              <div
                class="parallelogram-content-avatar"
                style="
                  background-image: url(../assets/images/ranking/${item.user.userRank}.png);
                  background-size: cover;
                  background-position: center;
                  width: 82px;
                  height: 60px;">
              </div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="mt-12 text-center mb-4">${item.user.username}</h4>
      <div class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap">
        <div class="bage bage-text" data-likePosition="TOP">TOP</div>
        <div class="bage bage-text" data-likePosition="JG">JG</div>
        <div class="bage bage-text" data-likePosition="MID">MID</div>
        <div class="bage bage-text" data-likePosition="AD">AD</div>
        <div class="bage bage-text" data-likePosition="SUP">SUP</div>
      </div>      
      <div class="thumb my-6">
        <p class="thum-text text-center">
          ${item.user.thumb} <span><i class="fa-regular fa-thumbs-up"></i></span>
        </p>
      </div>
    </div>
    `;
  });

  commentList.innerHTML = str;
}

function getFriendList() {
  axios.get(`${api_path}/friendLists?_expand=user`).then((res) => {
    data = res.data;
    for (let i = 0; i < data.length; i++) {
      friendListData.push(data[i].user);
    }
    renderFriendList();
  });
}

function renderFriendList() {
  let str = "";
  friendListData.forEach((item) => {
    str += `
    <div class="swiper-slide friendListCard border border-2 border-radius border-primary bg-dark blueShadow">
      <div class="meber-card-top">
        <div class="member-avatar position-relative">
          <div class="avatar">
            <img
              src="../assets/images/avatar/${item.avatar}.png"
              alt=""
              class="member-avatar-style"
              style="height: 300px; object-fit: cover"
            />
          </div>

          <div
            class="member-avatar-style position-absolute bottom-0"
          ></div>

          <div
            class="metal position-absolute"
            style="width: 82px; height: 60px"
          >
            <div class="parallelogram-1">
              <div
                class="parallelogram-content-avatar"
                style="
                  background-image: url(../assets/images/ranking/${item.userRank}.png);
                  background-size: cover;
                  background-position: center;
                  width: 82px;
                  height: 60px;
                "
              ></div>
            </div>
          </div>
        </div>
      </div>

      <h4 class="mt-12 text-center mb-4">${item.username}</h4>
      <div
        class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap"
      >
        <div class="bage bage-text">TOP</div>
        <div class="bage bage-text">JG</div>
        <div class="bage bage-text">MID</div>
        <div class="bage bage-text">ADC</div>
        <div class="bage bage-text">SUP</div>
      </div>
      <div class="thumb my-6">
        <p class="thum-text text-center">
        ${item.thumb} <span><i class="fa-regular fa-thumbs-up"></i></span>
        </p>
      </div>
      <div
        class="button-all d-flex justify-content-center gap-4 mb-8"
        style="height: 48px"
      >
        <button class="btn btnShadow border border-primary text-primary w-46">
          列為黑名單
          <span>
            <i class="fa-solid fa-ban ms-1"></i>
          </span>
        </button>
        <button class="btn btnShadow border border-primary text-primary w-40">
          移除好友
          <span>
            <i class="fa-solid fa-user-minus ms-1"></i>
          </span>
        </button>
      </div>
    </div>
  </div>
    `;
  });
  friendList.innerHTML = str;
}

function getBanList() {
  axios.get(`${api_path}/banLists?_expand=user`).then((res) => {
    data = res.data;
    for (let i = 0; i < data.length; i++) {
      banListData.push(data[i].user);
    }
    renderBanList();
  });
}

function renderBanList() {
  let str = "";
  banListData.forEach((item) => {
    str += `
    <div class="swiper-slide blackListCard border border-2 border-radius border-primary bg-dark blueShadow">
      <div class="meber-card-top">
        <div class="member-avatar position-relative w-100">
          <div class="avatar w-100">
            <img
              src="../assets/images/avatar/${item.avatar}.png"
              alt=""
              class="member-avatar-style"
              style="height: 300px; object-fit: cover"
            />
          </div>

          <div class="member-avatar-style position-absolute bottom-0"></div>

          <div class="metal position-absolute" style="width: 85px; height: 65px">
            <div class="parallelogram-1">
              <div class="parallelogram-content-avatar"
                style="
                  background-image: url(../assets/images/ranking/${item.userRank}.png);
                  background-size: cover;
                  background-position: center;
                  width: 85px;
                  height: 60px;
                "></div>
            </div>
          </div>
        </div>
      </div>

      <h5 class="mt-12 text-center mb-4">${item.username}</h5>
      <div class="tag-group d-flex justify-content-center g-8 w-100 flex-wrap">
        <div class="bage bage-text">TOP</div>
        <div class="bage bage-text">JG</div>
        <div class="bage bage-text">MID</div>
        <div class="bage bage-text">ADC</div>
        <div class="bage bage-text">SUP</div>
      </div>
      <div class="thumb my-6">
        <p class="thum-text text-center">
        ${item.thumb} <span><i class="fa-regular fa-thumbs-up"></i></span>
        </p>
      </div>
      <div
        class="button-all d-flex justify-content-center gap-4 mb-8"
        style="height: 48px"
      >
        <button class="btn btnShadow border border-primary text-primary w-80">
          剔除
          <span>
            <i class="fa-solid fa-user-slash ms-1"></i>
          </span>
        </button>
      </div>
    </div>
    `;
  });
  banList.innerHTML = str;
}

//Swiper
// const evaluateSwiper = new Swiper("#evaluateSwiper", {
//   slidesPerView: 4,
//   spaceBetween: 24,
//   loop: true,
//   grabCursor: "true",
//   pagination: {
//     el: "#swiper-pagination3",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: "#swiper-button-next3",
//     prevEl: "#swiper-button-prev3",
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//   },
// });
// const friendListSwiper = new Swiper("#friendListSwiper", {
//   slidesPerView: 3,
//   spaceBetween: 24,
//   loop: true,
//   grabCursor: "true",
//   pagination: {
//     el: "#swiper-pagination4",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: "#swiper-button-next4",
//     prevEl: "#swiper-button-prev4",
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });
// const blackListSwiper = new Swiper("#blackListSwiper", {
//   slidesPerView: 4,
//   spaceBetween: 24,
//   loop: true,
//   grabCursor: "true",
//   pagination: {
//     el: "#swiper-pagination5",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: "#swiper-button-next5",
//     prevEl: "#swiper-button-prev5",
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 4,
//     },
//   },
// });
// const historicalTeamRecordsSwiper = new Swiper("#historicalTeamRecordsSwiper", {
//   slidesPerView: 3,
//   spaceBetween: 24,
//   loop: true,
//   grabCursor: "true",
//   pagination: {
//     el: "#swiper-pagination6",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: "#swiper-button-next6",
//     prevEl: "#swiper-button-prev6",
//   },

//   breakpoints: {
//     0: {
//       slidesPerView: 1,
//     },
//     768: {
//       slidesPerView: 2,
//     },
//     1024: {
//       slidesPerView: 3,
//     },
//   },
// });
