<script setup>
import TableCell from "@/components/table/TableCell.vue";

defineProps({
  modelValue: Number
});

const emit = defineEmits(['update:modelValue']);

function update(e) {
  let newValue = parseInt(e.target.value);
  if (isNaN(newValue) || newValue < 0) {
    newValue = 0;
  }

  e.target.value = newValue;
  emit('update:modelValue', newValue);
}

function validateKey(e) {
  // List of allowed number and control keys
  const numCtrlKeys = [
    48, 49, 50, 51, 52, 53, 54, 55, 56, 57,       // Top row 0-9
    96, 97, 98, 99, 100, 101, 102, 103, 104, 105, // Numpad 0-9
    37, 38, 39, 40, // Arrow keys
    8,  // Backspace
    46, // Delete
    9,  // Tab
  ];
  // List of allowed clipboard keys
  const clipboardKeys = [
    65, // 'A' Select All
    67, // 'C' Copy
    86, // 'V' Paste
    88  // 'X' Cut
  ];

  if (e.ctrlKey || e.metaKey) {
    if (clipboardKeys.includes(e.keyCode)) {
      return;
    }
  }

  // Prevent shift + number keys
  if (e.shiftKey && (e.keyCode >= 48 && e.keyCode <= 57)) {
    e.preventDefault();
  }

  if (!numCtrlKeys.includes(e.keyCode)) {
    e.preventDefault();
  }
}
</script>

<template>
  <TableCell>
    <input
        type="number"
        class="number-input"
        :value="modelValue"
        @keydown="validateKey"
        @input="update"
    />
  </TableCell>
</template>

<style scoped>
.number-input {
  height: 100%;
  width: 100%;
  background-color: #e2ecff;
  text-align: center;
}

/* Chrome, Safari, Edge, Opera */
.number-input::-webkit-outer-spin-button,
.number-input::-webkit-inner-spin-button {
  -webkit-appearance: none;
  margin: 0;
}

/* Firefox */
.number-input[type=number] {
  -moz-appearance: textfield;
}

@media (max-width: 550px) {
  .number-input {
    text-align: left;
  }
}
</style>