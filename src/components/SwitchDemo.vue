<template>
  <div>
    <Switch v-model:value="y" />
<!--    Switch有一个value，这个value是自动监听的（也可以理解为双向绑定-->
  </div>
</template>
<script lang="ts">
import Switch from '../lib/Switch.vue'
import {ref} from 'vue'
export default {
  components: {Switch},
  setup(){
    const y = ref(false)
    return {y}
  }
}
</script>