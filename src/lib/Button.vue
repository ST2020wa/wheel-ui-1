<template>
    <button class="weee-button"
            :class="`theme-${theme}`"
    >
      <slot />
    </button>
</template>
<script lang="ts">
export default {
  props: {
    type: String,
    default: 'button'
  }
};
  //继承属性：否，让div不继承属性
</script>
<style lang="scss"  scoped>
div{
  border: 1px solid white;
}
</style>
