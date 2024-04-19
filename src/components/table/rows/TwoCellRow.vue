<script setup>
import TableRow from "@/components/table/TableRow.vue";
import TableCell from "@/components/table/TableCell.vue";
import InputNumberCell from "@/components/table/cells/InputNumberCell.vue";

defineProps({
  name: String,
  value: Number,
});

const emit = defineEmits(['update']);

function update(newValue) {
  emit('update', newValue);
}
</script>

<template>
  <TableRow>
    <TableCell>{{ name }}</TableCell>
    <InputNumberCell :model-value="value" @update:modelValue="update" />
  </TableRow>
</template>