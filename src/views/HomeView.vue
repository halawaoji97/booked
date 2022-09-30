<template>
  <main>
    <Header />
    <Hero />
    <Discover />
    <Contact />
  </main>
</template>

<script>
import { defineComponent } from "vue";

import Header from "@/components/Header.vue";
import Hero from "@/components/Hero.vue";
import Discover from "@/components/Discover.vue";
import Contact from "../components/Contact.vue";

export default defineComponent({
  components: {
    Header,
    Hero,
    Discover,
    Contact,
  },
  setup() {
    return {};
  },
});
</script>
