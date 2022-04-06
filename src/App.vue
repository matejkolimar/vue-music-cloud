<template>
  <app-header />

  <router-view v-slot="{ Component }">
    <transition name="fade" mode="out-in">
      <component :is="Component"></component>
    </transition>
  </router-view>

  <audio-player></audio-player>

  <auth-modal />
</template>

<script>
import AppHeader from "./components/AppHeader.vue";
import AuthModal from "./components/AuthModal.vue";
import AudioPlayer from "./components/AudioPlayer.vue";

export default {
  name: "App",
  components: {
    AppHeader,
    AuthModal,
    AudioPlayer,
  },
  created() {
    this.$store.dispatch("init_login");
  },
};
</script>
<style>
.fade-enter-from {
  opacity: 0;
}
.fade-enter-active {
  transition: all 0.5s linear;
}
.fade-leave-to {
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
