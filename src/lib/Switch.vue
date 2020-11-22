<template>
  <button @click="toggle" :class="{checked:value}">
<!--    如果x为true，button class是checked；反之则不是checked-->
    <span></span>
  </button>
</template>
<script lang="ts">
import {ref} from 'vue'
  export default {
  props: {
    value: Boolean
    //外部传的值可以直接获取
  },
    setup(props, context){
      const toggle = () => {
        context.emit('update:value', !props.value)
        // toggle的作用是把当前值取反，通过update:value事件发给外面，告诉外面有用户点击了value
        // this.$emit()
      }
      return {toggle}
    }
  }
</script>

<style lang="scss" scoped>
$h: 22px;
$h2: $h - 4px;
button{
  background: lightgrey;
  height: $h;
  width: $h*2;
  border: none;
  border-radius: $h/2;
  position: relative;
}
span{
  position: absolute;
  top: 2px;
  left: 2px;
  height: $h2;
  width: $h2;
  background:lightgreen;
  border-radius: $h2 / 2;
  transition: left 250ms;
}
button.checked{
  background: white;
}
button.checked > span {
  left: calc(100% - #{$h2} - 2px);
}
button:focus{
  outline: none;
}
</style>