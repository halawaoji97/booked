<template>
  <header>
    <div class="container-header">
      <div class="brand">
        <img
          src="https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=869&q=80"
          alt=""
        />
      </div>
      <nav>
        <div id="humburger">
          <button @click="openSidebar">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5 7H19"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M5 12H19"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
              />
              <path
                d="M5 17H19"
                stroke="#333333"
                stroke-width="2"
                stroke-linecap="round"
              />
            </svg>
          </button>
        </div>
        <ul :class="[isOpen ? 'open-nav' : '']">
          <li class="nav-link" @click="closeSidebar">
            <router-link to="/"> Home </router-link>
          </li>
          <li class="nav-link" @click="closeSidebar">
            <router-link to="/"> Discover </router-link>
          </li>
          <li class="nav-link" @click="closeSidebar">
            <router-link to="/"> Register </router-link>
          </li>
          <li class="search">
            <input type="text" placeholder="search" />
          </li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script>
import { defineComponent, ref } from "vue";

export default defineComponent({
  setup() {
    const isOpen = ref(false);
    const openSidebar = () => {
      isOpen.value = true;
    };

    const closeSidebar = () => {
      isOpen.value = false;
    };
    return {
      openSidebar,
      closeSidebar,
      isOpen,
    };
  },
});
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  background: rgb(252, 252, 252);
  border-bottom: 1px solid #dad7d7;

  .container-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 16px 16px;
    position: relative;

    .brand img {
      width: 44px;
    }

    nav {
      position: relative;
      #humburger {
        display: block;
        .open-nav {
          display: block;
        }
      }
      ul {
        &.open-nav {
          display: flex;
          transform: scaleX(1);
        }
        list-style: none;
        display: flex;
        background-color: rgb(24, 15, 51);

        justify-content: space-around;
        align-items: center;
        flex-direction: column;
        position: fixed;
        top: 0;
        left: 0;
        right: 0;
        transform: scaleX(0);
        height: 300px;
        border-bottom-left-radius: 24px;
        border-bottom-right-radius: 24px;
        transition: all 0.5s ease-in;
        transform-origin: right;

        li.nav-link {
          display: inline-block;
          width: 40%;
          text-align: center;
          transition: all 0.5s ease-in;
          margin-right: 30px;
          border-radius: 100px;
          padding: 8px 16px;

          a {
            color: white;
            text-decoration: none;
            font-size: 16px;
            font-weight: 500;
          }

          &:hover {
            background: #adadaf;
          }
        }
        .search {
          input {
            border-radius: 24px;
            display: block;
            padding: 8px 12px;
          }
        }
      }
    }
  }
}

@media (min-width: 768px) {
  header {
    .container-header {
      padding: 16px 32px;

      // nav {
      //   #humburger {
      //     display: block;
      //     .open-nav {
      //       display: block;
      //     }
      //   }
      //   ul {
      //   }
    }
  }
}

@media (min-width: 900px) {
  header {
    .container-header {
      padding: 32px 64px;
      nav {
        #humburger {
          display: none;
        }
        ul {
          list-style: none;
          display: flex;
          background-color: transparent;
          justify-content: space-between;
          flex-direction: row;
          position: static;
          height: 100%;
          width: 500px;
          border-bottom-left-radius: 0;
          border-bottom-right-radius: 0;
          transform: scaleX(1);

          li.nav-link {
            width: 100%;
            a {
              color: rgb(5, 7, 27);
            }
            &:hover a {
              color: aliceblue;
            }
          }
        }
      }
    }
  }
}
</style>
