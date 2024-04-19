<script setup>
defineProps({
  bold: {
    type: Boolean,
    default: false
  },
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
    'bold': bold,
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

.bold {
  font-weight: bolder;
}

.unfilled {
  background-color: #cdcdcd;
}

.label {
  background-color: #70a0ff;
  color: white;
  font-weight: bolder;
}

@media (max-width: 550px) {
  .table-cell {
    justify-content: flex-start;
  }
}
</style>