<template>
  <body>
      <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-KyZXEAg3QhqLMpG8r+8fhAXLRk2vvoC2f3B09zVXn8CA5QIVfZOJ3BCsw2P0p/We"
      crossorigin="anonymous"
    />

    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />

    <div class="header">
      <div class="container">
        <div class="row top" id="row-top">
          <div class="col-md-6 text-left">
            <br />
            <ul class="list-inline left">
              <li class="list-inline-item">
                <a href=" ">مقالات</a>
              </li>

              <li class="list-inline-item">
                <a href=" "> تفسیر</a>
              </li>
              <li class="list-inline-item">
                <a href=" ">ایات</a>
              </li>
            </ul>
            <br />
          </div>
          <div class="col-md-6 text-right">
            <br />
            <ul class="list-inline" style="direction: ltr; text-align: left">
              <li class="list-inline-item">
                <a href="">حساب کاربری</a>
              </li>
              <li class="list-inline-item">
                <a href="">خروج</a>
              </li>
            </ul>
          </div>
        </div>

        <div style="display: none" class="row inner-row">
          <div class="navtopbox w-100">
            <div class="row nav-top-row">
              <div class="col-md-8 text-left left-auto">
                <ul class="list-inline">
                  <li class="list-inline-item">
                    <a href="">
                      <i class="fa fa-phone"></i>
                      2222
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a href="">
                      <i class="fa fa-cog"></i>
                      Mon to sat 7:00 - 16:00
                    </a>
                  </li>

                  <li class="list-inline-item">
                    <a href="">
                      <i class="fa fa-envelope"></i>
                      Ru13y051@gmail.com
                    </a>
                  </li>
                </ul>
              </div>

              <div class="col-md-4">
                <ul class="list-inline social-icons text-right">
                  <li class="list-inline-item">
                    <a href=""><i class="fa fa-facebook"></i> </a>
                  </li>

                  <li class="list-inline-item">
                    <a href=""><i class="fa fa-instagram"></i> </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div class="nav-container w-100">
          <nav
            class="
              navbar navbar-expand-lg navbar-light
              bg-light
              w-100
              custom-navbar
            "
          >
            <button
              class="navbar-toggler"
              data-toggle="collapse"
              data-target="#navy"
            >
              <span class="navbar-toggler-icon"></span>
            </button>

            <div
              class="collpase navbar-collapse"
              id="navy"
              style="text-align: left; direction: rtl"
            >
              <ul class="navbar-nav ml-auto">
                <li class="nav-item active">
                  <a href="" class="nav-link active"> صفحه نخست</a>
                </li>

                <li class="nav-item">
                  <a href="" class="nav-link"> نشریات</a>
                </li>

                <li class="nav-item">
                  <a href="" class="nav-link"> نویسندگان</a>
                </li>

                <li class="nav-item">
                  <a href="" class="nav-link"> اخبار</a>
                </li>

                <li class="nav-item">
                  <a href="" class="nav-link"> کارگروه</a>
                </li>

                <li class="nav-item">
                  <a href="" class="nav-link"> تماس با ما</a>
                </li>
              </ul>
              <div class="my-2 my-lg-0 nav-right-icons">
                <div id="search_top">
                  <input
                    id="input-menu"
                    placeholder="  آیه قرآن سرچ کنید  "
                    type="text"
                  />

                  <span id="span-serach"> </span>
                </div>
              </div>
              <a href="" class="navbar-brand">
                <img src="img/PngItem_2047314.png" alt="LogoQouran" />
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>

    <div class="contact">
      <div>
        <ul id="Hashtak">
          <li
            class="list-group-item list-group-item-light"
            id="cont"
            v-for="(suraa, index) in SuraList"
            :key="index"
          >
            <router-link  :to="{ name: 'about', params: { id: index + 1 } }">
              <p id="index-aye">{{ index + 1 }}</p>
              <h3>{{ suraa[4] }}</h3>
              <h5>{{ suraa[7] }}</h5>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </body>
</template>

<script >

import aboutPage from "./aboutPage.vue";
import { SuraList } from "../assets/quran-metadata";
import { useRouter, useRoute } from "vue-router";
export default {
  components: { aboutPage },
  setup() {
    const router = useRouter();
    const route = useRoute();

  

    return {
      SuraList,
    };
  },
};
</script>

<style scoped>
body {
  background: rgb(255, 255, 255);
}
@font-face {
  font-family: "Yeskan" !important;
  src: url("../assets/fonts/vazir/Vazir-Thin-WOL.eot") format("eot");
}
* {
  font-family: "Yeskan",  !important; 
}

#index-aye {
  padding: 0px;
  width: 29px;
  height: 24px;
  color: white;
  float: left;
  display: block;
  background: #00acc1;
  text-align: center;
  font-size: 19px;
  border-radius: 4px;
}

#cont {
  box-shadow: 0px 0px 5px 5px #ddd;
  border-radius: 16px;
  width: 200px;
  padding: 16px;
  margin: 16px;
}
#Hashtak h3 {
  color: #00acc1;
}
#Hashtak h5 {
  color: #00acc1;
}
#Hashtak {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
}
#span-serach {
  height: 27px;
  width: 32px;
  position: absolute;
  display: block;
  background-image: url(./img/icons8-search-50.png);
  left: -1px;
  bottom: 9px;

  background-repeat: no-repeat;
  background-size: cover;
}
#input-menu {
  width: 436px;
  height: 28px;
  border: 1px solid #eee;
  margin-top: 3px;
  color: #474b4d;
  font-family: yekan;
  padding-right: 3px;
  outline: none;
  border-radius: 11px;
  cursor: auto;
}
#search_top {
  width: 434px;
  height: 40px;

  position: relative;
}

* {
  direction: rtl;
  text-align: right;
}
a {
  color: rgb(37, 0, 248);
  text-decoration: none;
}

.header {
  background-position: center;
  background-size: cover;
  padding: 9px 20px 38px;
}
#row-top {
  direction: rtl;
}
.row.top ul li a {
  color: #ccc;
  font-size: 14px;
  text-decoration: none;
}
.row.top ul li {
  margin-right: 14px !important;
}
.custom-navbar {
  border-radius: 100px;
  background: rgb(255, 255, 255, 0.1) !important;
  position: relative;
}

.nav-right-icons li a {
  color: #272727;
}

.nav-top-row {
  background: #2f3032;
}
.row.nav-top-row {
  padding: 14px;
  border-radius: 41px;
  width: 77%;
  right: 29px;
  position: absolute;
  top: 73px;
  z-index: 9;
}

ul.navbar-nav.mr-auto {
  padding-top: 50px;
}
.navtopbox.w-100 {
  position: relative;
  color: white;
  text-decoration: none;
}
</style>
