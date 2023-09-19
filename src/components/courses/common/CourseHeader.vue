<template>
    <div class="w-full md:w-2/3 mt-4">
        <div class="max-w-xl text-center md:text-left pt-5 lg:pt-24">
            <h2 class="text-4xl font-bold">{{ props.data.title || 'JR Math Course...' }}</h2>
            <p class="text-xl md:text-2xl leading-7 md:leading-9 my-5">
                {{ props.data.description || "Description is comming from server database to render here..." }}
            </p>
            <div class="my-8">
                <div class="flex items-center justify-center md:justify-start"><span class="font-bold"
                        data-testid="trust-score">4.7</span><span class="mx-2 flex items-center"><img alt="Stars"
                            data-testid="trust-stars" fetchpriority="high" width="90" height="30" decoding="async"
                            data-nimg="1" class="inline" src="/images/reviews.svg" style="color: transparent;"></span>
                    <span class="text-sm text-gray-700 font-medium" data-testid="trust-reviews">2371 reviews</span>
                </div>
            </div>
            <div class="flex flex-col items-center md:items-start"><a
                    class="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-gradient-to-r from-pink-500 to-orange-600  transition-all duration-200 ease-out hover:text-white hover:no-underline mt-3 w-full md:w-auto"
                    role="button" href="https://sso.teachable.com/secure/146684/checkout/2954151/all-access">Access All
                    Courses for BDT 10,000</a></div>
            <div class="mt-4 flex items-center justify-center md:justify-start">
                <hr class="inline-block w-6 mr-2">or
                <hr class="inline-block w-6 ml-2">
            </div>
            <div>
                <a class="group inline-block px-6 py-3 text-sm no-underline uppercase text-center text-white tracking-wider font-medium md:font-semibold rounded-full bg-orange-500 hover:bg-orange-400 transition-all duration-200 ease-out hover:text-white hover:no-underline mt-3 w-full md:w-auto"
                    role="button"
                    href="https://sso.teachable.com/secure/146684/checkout/4647771/ultimate-react-part1?coupon_code=G4P0DF">Buy
                    Course for BDT {{ numberWithCommas(props.data.price) || "..." }}
                    <span class="line-through ml-1 text-xs">
                        BDT {{ numberWithCommas(props.data.discountPrice) || "..." }}
                    </span>
                </a>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
const props = defineProps<{ data: any }>()

// Convert a number to a string with commas
function numberWithCommas(x: number) {
    if (typeof x === 'string') {
        return `${x}`.replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }
}
// Convert a number to a string with commas taking into account decimal point
function numberWithCommasDecimal(x: number) {
    return `${x}`.replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g, ",");
}
</script>

<style scoped></style>