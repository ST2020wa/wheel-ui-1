<template>
  <div>
    <Topnav />
    <div class="content">
      <aside v-if="menuVisible">
<!--        当 menuVisible 变化的时候， aside 也要变化-->
        <h2>Components</h2>
        <ol>
          <li>
            <router-link to="/doc/switch">Switch</router-link>
          </li>
          <li>
            <router-link to="/doc/button">Button</router-link>
          </li>
          <li>
            <router-link to="/doc/dialog">Dialog</router-link>
          </li>
          <li>
            <router-link to="/doc/tabs">Tabs</router-link>
          </li>
        </ol>
      </aside>
      <main>mainContent</main>
    </div>
  </div>
</template>
<script lang="ts">
import Topnav from '../components/Topnav.vue'
import {inject, Ref} from 'vue';
export default {
  components: {Topnav},
  setup(){
    const menuVisible = inject<Ref<boolean>>('menuVisible') // 可以理解为 get
    return {menuVisible}
  }
}
</script>
<style lang="scss" scoped>
aside {
  background: lightblue;
  width: 180px;
  padding: 16px;
  > h2 {
    margin-bottom: 4px;
  }
  > ol {
    > li {
      padding: 4px 0;
    }
  }
  @media (max-width: 500px) {
    position: fixed;
    top: 0;
    left: 0;
    padding-top: 70px;
  }
}
</style>