<script setup>
import {computed, ref} from "vue";
import LabelRow from "@/components/table/rows/LabelRow.vue";
import TwoCellRow from "@/components/table/rows/TwoCellRow.vue";
import RealRevenueRow from "@/components/table/rows/RealRevenueRow.vue";
import NormalRow from "@/components/table/rows/NormalRow.vue";
import {useTapGuidelines} from "@/composables/useTapGuidelines.js";

// todo design: (mr)
// todo display: all guidelines?

const topLineRevenue = ref(0);
const materialAndSubs = ref(0);

const realRevenue = computed(() => {
  return topLineRevenue.value - materialAndSubs.value;
});

const { tapGuidelines } = useTapGuidelines(realRevenue);
</script>

<template>
  <div class="tier-label">
    Tier {{ tapGuidelines.tier }}
  </div>

  <div class="table">
    <LabelRow />
    <TwoCellRow
        name="Top Line Revenue"
        :value="topLineRevenue"
        @update="(newValue) => topLineRevenue = newValue"
    />
    <TwoCellRow
        name="Material & Subs"
        :value="materialAndSubs"
        @update="(newValue) => materialAndSubs = newValue"
    />
    <RealRevenueRow
        :value="realRevenue"
    />
    <NormalRow
        name="Profit"
        :real-revenue="realRevenue"
        :target-alloc-percent="tapGuidelines.profit"
    />
    <NormalRow
        name="Owner's Pay"
        :real-revenue="realRevenue"
        :target-alloc-percent="tapGuidelines.ownersPay"
    />
    <NormalRow
        name="Tax"
        :real-revenue="realRevenue"
        :target-alloc-percent="tapGuidelines.tax"
    />
    <NormalRow
        name="Operating Expenses"
        :real-revenue="realRevenue"
        :target-alloc-percent="tapGuidelines.operatingExpenses"
    />
  </div>
</template>

<style scoped>
.tier-label {
  margin-bottom: 10px;
  text-align: center;
  font-weight: bolder;
  font-size: 16px;
}
.table {
  border: 1px solid black;
}
</style>