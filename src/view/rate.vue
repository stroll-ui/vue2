<template>
  <div class="cbf">
    <smBox>
      <p>
        <span class="demonstration">默认不区分颜色</span>
        <smRate v-model="value1"/>
      </p>
      <p>
        <span class="demonstration">区分颜色</span>
        <smRate
          v-model="value2"
          :colors="colors"
        />
      </p>
      <p>
        <smRate
          v-model="value3"
          show-text
        />
      </p>
      <p>
        <smRate
          v-model="value4"
          :icon-classes="iconClasses"
          void-icon-class="gennlife_Show_Warn"
          :colors="['#99A9BF', '#F7BA2A', '#FF9900']"
        />
      </p>
      <p>
        <smRate
          v-model="value"
          show-score
          allow-half
          text-color="#ff9900"
          score-template="{value}"
        />
      </p>
    </smBox>
  </div>
</template>

<script>
export default {
  name: 'rateShow',
  title: '评分',
  hide: false,
  data () {
    return {
      value4: 0,
      value1: 0,
      value2: 0,
      value3: 0,
      value: 3.5,
      iconClasses: ['gennlife_Menu_Quality1', 'gennlife_Menu_Quality1', 'gennlife_Menu_Quality1'], // 等同于 { 2: 'icon-rate-face-1', 4: { value: 'icon-rate-face-2', excluded: true }, 5: 'icon-rate-face-3' }
      colors: ['#99A9BF', '#F7BA2A', '#FF9900'] // 等同于 { 2: '#99A9BF', 4: { value: '#F7BA2A', excluded: true }, 5: '#FF9900' }
    }
  },
  methods: {}
}
</script>

<style scoped lang='stylus'>
p{
  margin-bottom: 20px
}
</style>
