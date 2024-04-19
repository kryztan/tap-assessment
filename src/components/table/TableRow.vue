<script setup>
import {computed, useSlots} from 'vue';
import TableCell from "@/components/table/TableCell.vue";

const slots = useSlots();

const unfilledCellCount = computed(() => {
  // The default slot only includes TableCell components.
  const slottedCellCount = slots.default().length;
  // There should be 6 TableCell components per row.
  return 6 - slottedCellCount;
});
</script>

<template>
  <div class="table-row">
    <slot />

    <TableCell
        v-for="n in unfilledCellCount"
        :key="'unfilled-' + n"
        unfilled
    />
  </div>
</template>

<style scoped>
.table-row {
  display: flex;
}
</style>