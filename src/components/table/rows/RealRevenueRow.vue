<script setup>
import TableRow from "@/components/table/TableRow.vue";
import TableCell from "@/components/table/TableCell.vue";

defineProps({
  value: Number,
});
</script>

<template>
  <TableRow>
    <TableCell>Real Revenue</TableCell>
    <TableCell style="background-color: #f5f5f5">{{ value.toLocaleString('en-US') }}</TableCell>
    <TableCell>100%</TableCell>
    <TableCell>{{ value.toLocaleString('en-US') }}</TableCell>
  </TableRow>
</template>