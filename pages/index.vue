<template>
  <div class="container">
    <ul>
      <li v-for="(item, label, index) in data" :key="index">
        <div>{{ 'USD — ' + label }}</div>
        <div class="flex">
          <input v-model="item.test" type="text" />
          <input v-model="rInp" type="text" />
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
  computed: {
    lInp: {
      get() {
        return this.statusProxy === null ? true : this.statusProxy
      },
      set(val) {
        this.statusProxy = val
      },
    },
    rInp() {
      return 1
    },
  },
}
</script>
