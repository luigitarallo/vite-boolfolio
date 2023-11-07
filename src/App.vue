<script>
import NavbarUi from "./components/ui/NavbarUi.vue";

export default {
  components: { NavbarUi },
};
</script>

<template>
  <div class="container my-3">
    <NavbarUi />
    <router-view></router-view>
  </div>
</template>

<style lang="scss"></style>
