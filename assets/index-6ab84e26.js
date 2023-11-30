import"./main-57dacb3f.js";import"./register-203d3938.js";const a=localStorage.getItem("user"),e=document.querySelector("header");a?e.innerHTML=`<div class="fixed-top w-100 bg-dark bg-opacity-80 px-lg-26 py-lg-2">
    <div class="d-flex align-items-center justify-content-lg-between">
      <a class="logo" href="index.html">
        <h1>LOL組隊大師</h1>
      </a>
      <nav>
        <ul class="d-flex align-items-center justify-content-lg-between gap-10">
          <li>
            <a href="teamList.html" class="text-secondary2-4"
              ><i class="fa-solid fa-list me-2"></i>隊伍列表</a
            >
          </li>
          <li>
            <a href="playerList.html"
              ><i class="fa-solid fa-hat-wizard me-2"></i>玩家列表</a
            >
          </li>
          <li>
            <a href="buildTeam.html"
              ><i class="fa-solid fa-flag me-2"></i>建立隊伍</a
            >
          </li>
          <li>
            <a href="myTeamList.html"
              ><i class="fa-solid fa-users me-2"></i>我的隊伍</a
            >
          </li>
          <li>
            <a href="#"><i class="fa-solid fa-bell"></i></a>
          </li>
          <!-- member -->
          <li class="d-flex align-items-center justify-content-lg-between">
            <a href="memberCentre.html" class="member"
              ><img
                class="border border-1 border-white border-radius me-2"
                src="/assets/images/Member.png"
                alt="Member.png"
            /></a>
            <!-- member dropdown -->
            <div class="dropdown-center">
              <a
                class="btn border-0"
                href="#"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                ><i
                  class="fa-solid fa-angle-down fa-lg text-secondary arrowBtn"
                ></i
              ></a>

              <ul
                class="dropdown-menu border border-4 border-end-0 border-bottom-0 border-start-0 blueShadow mt-4"
              >
                <li>
                  <a class="dropdown-item" href="memberCentre.html"
                    ><i class="fa-solid fa-user me-2"></i>我的資料</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="fa-solid fa-thumbs-up me-2"></i>評價資訊</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="#"
                    ><i class="fa-solid fa-handshake me-2"></i>好友名單</a
                  >
                </li>
                <li>
                  <a class="dropdown-item" href="historicalTeamRecords.html"
                    ><i class="fa-solid fa-people-group me-2"></i
                    >歷史組隊紀錄</a
                  >
                </li>
                <li>
                  <a class="jsLogout dropdown-item" href="#"
                    ><i class="fa-solid fa-arrow-right-from-bracket me-2"></i
                    >登出</a
                  >
                </li>
              </ul>
            </div>
          </li>
          <li></li>
        </ul>
      </nav>
    </div>
  </div>`:e.innerHTML=`<div class="fixed-top w-100 bg-dark bg-opacity-80 px-lg-26 py-lg-2">
    <div class="d-flex align-items-center justify-content-lg-between">
      <a class="logo" href="index.html">
        <h1>LOL組隊大師</h1>
      </a>
      <nav>
        <ul class="d-flex align-items-center justify-content-lg-between gap-10">
          <li>
            <a href="teamList.html" class="text-secondary2-4"
              ><i class="fa-solid fa-list me-2"></i>隊伍列表</a
            >
          </li>
          <!-- 登入 -->
          <li class="btnLogin">
            <a href="#loginModal" class="login" data-bs-toggle="modal"
              >登入 | 註冊</a
            >
          </li>
        </ul>
      </nav>
    </div>
  </div>
  <!-- 登入 loginModal -->
  <div
  class="modal fade"
  id="loginModal"
  tabindex="-1"
  aria-labelledby="loginModal"
  aria-hidden="true"
  data-backdrop="false"
>
  <div class="modal-dialog modal-dialog-centered modal-lg py-18">
    <div class="modal-content border-radius bg-dark px-25 py-12 blueShadow">
      <div>
        <h3 class="modal-title fs-4 fs-md-3 fw-md-bold fw-bold text-center">
          登入
        </h3>
      </div>
      <div class="modal-body d-flex flex-column px-4 pt-8">
        <form class="jsLoginForm mb-12">
          <div class="mb-7">
            <label for="userEmail" class="form-label fs-5 fw-medium mb-2"
              >帳號</label
            >
            <input
              type="email"
              class="form-control p-3"
              id="userEmail-login"
              aria-describedby="emailHelp"
              placeholder="請輸入電子信箱"
            />
          </div>
          <div>
            <label for="userPassword" class="form-label fs-5 mb-2">密碼</label>
            <input
              type="password"
              class="form-control p-3"
              id="userPassword-login"
              placeholder="請輸入 8-16 位密碼"
            />
          </div>
        </form>
        <div class="submitGroup">
          <!-- login-btn -->
          <a href="#" class="jsLoginBtn w-100 mb-5">
            <button
              type="submit"
              class="submitBtn bg-secondary2 bg-opacity-60 border border-0 border-radius p-4 fw-medium text-white w-100"
            >
              登入
            </button>
          </a>
          <!-- google-login-btn -->
          <a href="index.html" class="w-100">
            <button
              type="submit"
              class="submitBtn bg-dark border border-2 border-radius p-4 fw-medium text-white border-white w-100"
            >
              <img
                src="/assets/images/Icon-Google.png"
                alt="google-icon"
                class="me-4 text-align-center"
              />
              Login with Google
            </button>
          </a>
        </div>
        <div class="mt-8">
          <ul class="d-flex justify-content-between">
            <li>
              <a
                href="#registerModal"
                class="register text-decoration-underline link-offset-2"
                data-bs-toggle="modal"
                >註冊帳號</a
              >
            </li>
            <li>
              <a
                href="#forgetPasswordModal"
                class="forgetPassword text-decoration-underline link-offset-2"
                data-bs-toggle="modal"
                >忘記密碼？</a
              >
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>

  <!-- 註冊 registerModal -->
  <div
  class="modal fade"
  id="registerModal"
  tabindex="-1"
  aria-labelledby="registerModal"
  aria-hidden="true"
  data-backdrop="false"
>
  <div class="modal-dialog modal-dialog-centered modal-lg py-18">
    <div class="modal-content border-radius bg-dark px-25 py-12 blueShadow">
      <div>
        <h3 class="modal-title fs-4 fs-md-3 fw-md-bold fw-bold text-center">
          註冊帳號
        </h3>
      </div>
      <div class="modal-body d-flex flex-column px-4 pt-8">
        <form class="jsRegisterForm mb-12">
          <div class="mb-7">
            <label for="userEmail" class="form-label fs-5 fw-medium mb-2"
              >帳號</label
            >
            <input
              type="email"
              class="form-control p-3"
              id="userEmail-register"
              aria-describedby="emailHelp"
              placeholder="請輸入電子信箱"
              name="Email"
            />
            <div class="alertMessage">
              <p data-message="Email"></p>
            </div>
          </div>
          <div class="mb-7">
            <label for="userPassword" class="form-label fs-5 mb-2">密碼</label>
            <input
              type="password"
              class="form-control p-3"
              id="userPassword-register"
              placeholder="請輸入 8-16 位密碼"
              name="Password"
            />
            <div class="alertMessage">
              <p data-message="Password"></p>
            </div>
          </div>
          <div>
            <label for="userName" class="form-label fs-5 mb-2"
              >使用者名稱</label
            >
            <input
              type="name"
              class="form-control p-3"
              id="userName-register"
              placeholder="請輸入遊戲 ID"
              name="userName"
            />
            <div class="alertMessage">
              <p data-message="userName"></p>
            </div>
          </div>
        </form>
        <div class="submitGroup">
          <!-- account-btn -->
          <a href="#" class="jsCreateAccountBtn w-100 mb-5">
            <button
              type="submit"
              class="submitBtn bg-secondary2 bg-opacity-60 border border-0 border-radius p-4 fw-medium text-white w-100"
            >
              建立帳號
            </button>
          </a>
          <!-- google-Sign up-btn -->
          <a href="#" class="w-100">
            <button
              type="submit"
              class="submitBtn bg-dark border border-2 border-radius p-4 fw-medium text-white border-white w-100"
            >
              <img
                src="/assets/images/Icon-Google.png"
                alt="google-icon"
                class="me-4 text-align-center"
              />
              Sign up with Google
            </button>
          </a>
        </div>
        <div class="mt-8 text-center">
          <a href="#loginModal" class="login" data-bs-toggle="modal"
            >已經有帳號了? <span class="ms-4">登入</span></a
          >
        </div>
      </div>
    </div>
  </div>
</div>

  <!-- 忘記密碼 forgetPasswordModal -->
  <div
  class="modal fade"
  id="forgetPasswordModal"
  tabindex="-1"
  aria-labelledby="forgetPasswordModal"
  aria-hidden="true"
  data-backdrop="false"
>
  <div class="modal-dialog modal-dialog-centered modal-lg py-18">
    <div class="modal-content border-radius bg-dark px-25 py-12 blueShadow">
      <div>
        <h3 class="modal-title fs-4 fs-md-3 fw-md-bold fw-bold text-center">
          忘記密碼
        </h3>
      </div>
      <div class="modal-body d-flex flex-column px-4 pt-8">
        <form class="mb-12">
          <div>
            <label for="userEmail" class="form-label fs-5 fw-medium mb-2"
              >電子信箱</label
            >
            <input
              type="email"
              class="form-control p-3"
              id="userEmail-forget"
              aria-describedby="emailHelp"
              placeholder="請輸入帳號電子信箱"
            />
          </div>
        </form>
        <div class="submitGroup text-center align-items-center">
          <!--reset password-btn -->
          <a href="index.html">
            <button
              type="submit"
              class="submitBtn bg-secondary2 bg-opacity-60 border border-0 border-radius py-4 px-12 fw-medium text-white"
            >
              重設密碼
            </button>
          </a>
        </div>
      </div>
    </div>
  </div>
</div>`;const l=document.querySelector(".jsLogout");l.addEventListener("click",s=>{localStorage.removeItem("user"),location.reload()});
