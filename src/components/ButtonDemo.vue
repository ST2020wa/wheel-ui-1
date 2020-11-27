<template>
  <div>
    Hey I'm ButtonDemo!
  </div>
  <h3>Example 1</h3>
  <div>
    <Button>Hello</Button>
    <Button theme="button">Hello</Button>
    <Button theme="link">Hello</Button>
    <Button theme="text">Hello</Button>
  </div>
</template>
<script lang="ts">
import Button from '../lib/Button.vue'
export default {
  components: {Button},
  setup(){
    const onClick = ()=>{
      console.log('hi')
    }
    return {onClick}
  }
}
</script>