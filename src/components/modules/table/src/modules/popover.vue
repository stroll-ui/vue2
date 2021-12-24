<template>
  <smPopover
    placement="bottom"
    @hide="onHide"
    trigger="click"
  >
    <div>
      <smInput size="mini" v-model="value"></smInput>
    </div>
    <i
      slot="reference"
      size="mini"
      :class="{
        gennlife_Act_Search: true,
        highlight: !!value
      }"
    ></i>
  </smPopover>
</template>

<script>
import smPopover from '@modules/popover/src/index.vue'
export default {
  name: 'smTablePopover',
  components: { smPopover },
  data () {
    return {
      value: ''
    }
  },
  methods: {
    onHide () {
      this.$listeners.searchChange && this.$listeners.searchChange(this.value)
    }
  }
}
</script>

<style scoped lang='stylus'>
.gennlife_Act_Search{
  color #909399
  padding 0 1px
  margin-left 5px
}
.highlight{
  color $primary
}
</style>
