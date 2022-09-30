<template>
  <section class="discover">
    <div class="container-discover">
      <div class="discover-content">
        <h1>
          Discover <br />
          Booked Tool
        </h1>
      </div>
      <div class="discover-image">
        <img src="../assets/image/discover.jpg" alt="discover" />
      </div>
    </div>

    <div class="tabs">
      <CustomTabs />
    </div>
  </section>
</template>

<script>
import { defineComponent, reactive, ref, toRefs } from "vue";
import CustomTabs from "./CustomTabs.vue";

export default defineComponent({
  components: {
    CustomTabs,
  },
  setup() {
    return {};
  },
});
</script>

<style lang="scss" scoped>
.discover {
  min-height: 500px;
  .tabs {
    width: 90%;
    padding: 16px;
    margin: auto;
    .tab {
      padding: 10px 20px;
      font-size: 18px;
      font-weight: 600;
    }
  }

  .container-discover {
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: column;
    padding: 16px 16px;
    margin: 0 auto;

    .discover-content {
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
    }

    .discover-image {
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
  .discover {
    .container-discover {
      padding: 32px 32px;

      .discover-image {
        img {
          height: auto;
          max-width: 400px;
        }
      }
    }
  }
}

@media (min-width: 900px) {
  .discover {
    padding: 40px 0;
    .tabs {
      width: 50%;
    }
    .container-discover {
      padding: 40px 64px;
      flex-direction: row;

      .discover-image {
        img {
          height: auto;
          max-width: 100%;
        }
      }
    }
  }
}
</style>
