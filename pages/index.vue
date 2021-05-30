<template>
  <div class="flex min-h-screen bg-white items-center justify-center">
    <ul>
      <li v-for="(item, label, index) in data" :key="index" class="pb-6">
        <div class="text-center pb-4">
          <span>
            {{ 'USD — ' + label + ': ' }}
          </span>
          <span>
            {{ item }}
          </span>
        </div>
        <div class="grid grid-cols-2 gap-5">
          <input
            v-model="forms[index].USD"
            class="
              col-span-1
              rounded
              shadow
              border border-color-gray-600
              text-gray-700
              py-1
              px-4
            "
            type="text"
            @input="convrtL(index, label)"
          />
          <input
            v-model="forms[index][label]"
            class="
              col-span-1
              rounded
              shadow
              border border-color-gray-600
              text-gray-700
              py-1
              px-4
            "
            type="text"
            @input="convrtR(index, label)"
          />
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  async asyncData({ $axios, error }) {
    const data = await $axios
      .$get(
        `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,ETH,EUR&api_key=bb247d330f92212852dc26e5cceba436b87caee1e83ec909a15bd9dbec8b69d2`
      )
      .catch((e) => {
        error({ statusCode: 404, message: 'Post not found' })
      })
    return { data }
  },
  data() {
    return {
      data: 'default',
      forms: [],
    }
  },
  created() {
    for (const key in this.data) {
      this.forms.push({
        USD: 0,
        [key]: 0,
      })
    }
    setInterval(
      () =>
        this.$axios
          .$get(
            `https://min-api.cryptocompare.com/data/price?fsym=USD&tsyms=BTC,ETH,EUR&api_key=bb247d330f92212852dc26e5cceba436b87caee1e83ec909a15bd9dbec8b69d2`
          )
          .then((response) => {
            this.data = response
          }),
      1000000
    )
  },
  methods: {
    convrtR(i, l) {
      this.forms[i].USD = Math.floor(this.forms[i][l] / this.data[l])
    },
    convrtL(i, l) {
      this.forms[i][l] =
        Math.floor(this.data[l] * this.forms[i].USD * 100000) / 100000
    },
  },
}
</script>
