<template>
  <button :class="`my-button ${typeClass}`" @click="handleClick">
    <slot></slot> <!-- 用于插入按钮文本 -->
  </button>
</template>
 
<script lang="ts">
import { defineComponent, PropType, computed } from 'vue';
 
export default defineComponent({
  name: 'MyButton',
  props: {
    type: {
      type: String as PropType<'primary' | 'secondary'>,
      default: 'primary'
    }
  },
  setup(props, { emit }) {
    const typeClass = computed(() => {
      switch (props.type) {
        case 'primary':
          return 'bg-blue-500 hover:bg-blue-700';
        case 'secondary':
          return 'bg-gray-500 hover:bg-gray-700';
        default:
          return '';
      }
    });
 
    const handleClick = (event: Event) => {
      emit('click', event);
    };
 
    return {
      typeClass,
      handleClick
    };
  }
});
</script>
 
<style scoped>
.my-button {
  border: none;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  cursor: pointer;
  transition: background-color 0.3s;
}
</style>