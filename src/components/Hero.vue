<template>
  <section class="hero">
    <div class="container-hero">
      <div class="hero-content">
        <h1>
          Booked Tool <br />
          <span>enabled you create Interactive Advertiment</span>
        </h1>
        <a href="#">What is it?</a>
      </div>
      <div class="hero-image">
        <img src="../assets/image/hero-image.jpg" alt="hero-image" />
      </div>
    </div>

    <div class="form">
      <h5>
        Please login to start using <br />
        <span>Booked Tool</span>
      </h5>
      <form action="">
        <input type="text" placeholder="Email" />
        <input type="password" placeholder="Pasword" />
        <button type="submit">Login</button>
      </form>
    </div>
  </section>
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
.hero {
  background-image: url("../assets/image/bg.jpg");
  background-attachment: fixed;
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center center;
  min-height: 500px;

  .container-hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 16px 16px;
    margin: 0 auto;

    .hero-content {
      padding: 20px;
      background: rgba(0, 0, 0, 0.7);
      h1 {
        font-size: 34px;
        color: #ffffff;
        font-weight: 700;

        span {
          color: #bbbbcc;
          font-size: 24px;
          font-weight: 500;
        }
      }

      a {
        font-size: 18px;
        display: inline-block;
        text-decoration: none;
        background: #1616df;
        color: white;
        padding: 12px 32px;
        border-radius: 8px;
        outline: none;
        border: none;
        margin: 50px 0;
      }
    }

    .hero-image {
      border-radius: 8px;
      img {
        display: block;
        height: 300px;
        max-width: 280px;
        border-radius: 8px;
        object-fit: cover;
        overflow: hidden;
      }
    }
  }

  .form {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-direction: column;
    padding: 20px 16px;
    h5 {
      margin: auto;
      font-size: 18px;
      color: #636366;
      font-weight: 500;
      padding: 20px 0;

      span {
        color: #09091d;
        font-size: 34px;
        font-weight: 700;
      }
    }

    form {
      margin: auto;
      display: flex;
      justify-content: space-between;
      align-items: flex-start;
      flex-direction: column;

      input {
        border-radius: 8px;
        display: block;
        padding: 12px 16px;
        margin-top: 10px;
        outline: none;
      }

      button {
        font-size: 18px;
        display: inline-block;
        text-decoration: none;
        background: #1616df;
        color: white;
        padding: 12px 32px;
        border-radius: 8px;
        outline: none;
        border: none;
        margin: 40px 0;
      }
    }
  }
}

@media (min-width: 768px) {
  .hero {
    .container-hero {
      padding: 32px 32px;

      .hero-image {
        img {
          height: auto;
          max-width: 400px;
        }
      }
    }

    .form {
      form {
        flex-direction: row;

        input {
          margin-top: 0;
          margin-left: 20px;
        }

        button {
          margin: 0 0;
          margin-left: 20px;
        }
      }
    }
  }
}

@media (min-width: 900px) {
  .hero {
    padding: 40px 0;
    .container-hero {
      padding: 40px 64px;
      flex-direction: row;

      .hero-image {
        img {
          height: auto;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
