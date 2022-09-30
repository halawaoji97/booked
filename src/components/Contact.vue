<template>
  <section class="contact">
    <div class="container-contact">
      <div class="contact-content">
        <h1>Get In Touch</h1>
        <p>
          Want to get in touch? We'd love to hear from you. Here's how you can
          reach us...
        </p>
        <div class="search">
          <input type="text" placeholder="search" />
        </div>
      </div>
      <div class="contact-image">
        <img src="../assets/image/maps.jpg" alt="discover" />
      </div>
    </div>

    <div class="form">
      <h5>
        <span>FeedBack</span>
      </h5>
      <form action="">
        <input type="text" placeholder="Firstname" />
        <input type="text" placeholder="Lastname" />
        <input type="text" placeholder="Email" />
        <input type="text" placeholder="Message" />
        <button type="submit">Send</button>
      </form>
    </div>
  </section>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";

export default defineComponent({
  components: {},
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.contact {
  min-height: 500px;

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

  .container-contact {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 16px 16px;
    margin: 0 auto;

    .contact-content {
      padding: 20px 0;
      h1 {
        font-size: 34px;
        color: #09091d;
        font-weight: 700;

        span {
          color: #8f8f94;
          font-size: 24px;
          font-weight: 500;
        }
      }
      .search {
        margin-top: 50px;
        input {
          border-radius: 24px;
          display: block;
          padding: 8px 12px;
        }
      }
    }

    .contact-image {
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
}

@media (min-width: 768px) {
  .contact {
    .container-contact {
      padding: 32px 32px;

      .contact-image {
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
  .contact {
    padding: 40px 0;
    .container-contact {
      padding: 40px 64px;
      flex-direction: row;

      .contact-image {
        img {
          height: auto;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
