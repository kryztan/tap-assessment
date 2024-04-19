<script setup>
defineProps({
  unfilled: {
    type: Boolean,
    default: false
  },
  label: {
    type: Boolean,
    default: false
  }
});
</script>

<template>
  <div :class="['table-cell', {
    'unfilled': unfilled,
    'label': label
  }]">
    <slot />
  </div>
</template>

<style scoped>
.table-cell {
  border: 1px solid black;
  height: 100px;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: auto;
}

.unfilled {
  background: #dddddd;
}

.label {
  background: #70a0ff;
  color: white;
  font-weight: bolder;
}

@media (max-width: 550px) {
  .table-cell {
    justify-content: flex-start;
  }
}
</style>