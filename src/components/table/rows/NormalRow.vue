<script setup>
import {computed, ref} from 'vue';
import TableRow from "@/components/table/TableRow.vue";
import TableCell from "@/components/table/TableCell.vue";
import InputNumberCell from "@/components/table/cells/InputNumberCell.vue";

const props = defineProps({
  name: String,
  realRevenue: Number,
  targetAllocPercent: Number,
});

const currentValue = ref(0);

const targetValue = computed(() => {
  return (props.realRevenue * props.targetAllocPercent) / 100;
});

const bleed = computed(() => {
  const value = currentValue.value - targetValue.value;
  return value < 0
      ? `(${Math.abs(value).toLocaleString('en-US')})`
      : value.toLocaleString('en-US');
});

const fix = computed(() => {
  return currentValue.value > targetValue.value ? "Decrease" :
      currentValue.value < targetValue.value ? "Increase" : "N/A";
});

const formatNumberToString = number => number.toLocaleString('en-US');
</script>

<template>
  <TableRow>
    <TableCell bold>{{ name }}</TableCell>
    <InputNumberCell v-model="currentValue" />
    <TableCell>{{ targetAllocPercent + '%' }}</TableCell>
    <TableCell>{{ formatNumberToString(targetValue) }}</TableCell>
    <TableCell>{{ bleed }}</TableCell>
    <TableCell>{{ fix }}</TableCell>
  </TableRow>
</template>