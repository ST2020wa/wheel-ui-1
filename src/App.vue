<template>
  <router-view />
</template>

<script lang="ts">
import { ref,provide } from 'vue'

export default {
  name: 'App',
  setup(){
    const width = document.documentElement.clientWidth;
    const menuVisible = ref(width <= 500 ? false : true);
    provide('menuVisible', menuVisible) // 取名'menuVisible'，任何人想要使用menuVisible，只需要提供这个名字，这里的 provide 可以理解为 set
  }
}
</script>
