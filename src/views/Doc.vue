<template>
  <div>
    <Topnav />
    <div class="content">
      <aside>sideBar</aside>
      <main>mainContent</main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
export default {
  components: {Topnav}
}
</script>