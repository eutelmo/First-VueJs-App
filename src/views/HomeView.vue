<template>
  <Banner />
  <div class="main-container">
    <h1>Make your Burguer: </h1>
    <BurguerForm />
  </div>
</template>

<script>
import Banner from '@/components/Banner.vue';
import BurguerForm from '@/components/BurguerForm'

export default {
  name: "HomeView",
  components: {
    Banner,
    BurguerForm
  },
};
</script>
