import {computed} from "vue";

export function useTapGuidelines(realRevenue) {
    const tiers = ['A', 'B', 'C', 'D', 'E', 'F'];
    const guidelines = {
        'profit': [5, 10, 15, 10, 15, 20],
        'ownersPay': [50, 35, 20, 10, 5, 0],
        'tax': [15, 15, 15, 15, 15, 15],
        'operatingExpenses': [30, 40, 50, 65, 65, 65],
    };

    function getTier(realRevenue) {
        const phpUsdExchangeRate = 56;
        const usdValue = realRevenue / phpUsdExchangeRate;

        return usdValue < 250000 ? 'A' :
            usdValue < 500000 ? 'B' :
            usdValue < 1000000 ? 'C' :
            usdValue < 5000000 ? 'D' :
            usdValue < 10000000 ? 'E' : 'F';
    }

    const tapGuidelines = computed(() => {
        const tier = getTier(realRevenue.value);
        const index = tiers.indexOf(tier);

        return {
            'tier': tier,
            'profit': guidelines.profit[index],
            'ownersPay': guidelines.ownersPay[index],
            'tax': guidelines.tax[index],
            'operatingExpenses': guidelines.operatingExpenses[index],
        };
    });

    return { tapGuidelines };
}