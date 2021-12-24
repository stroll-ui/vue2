<template>
  <div :class="`smBox ${_class}`" :style="_style">
    <slot></slot>
  </div>
</template>
<script>
export default {
  name: 'smBox',
  title: '盒子',
  props: {
    offset: { type: [String, Number], default: 0 },
    styles: { style: [Object, String], default: '' }
  },
  computed: {
    _style () {
      return `height: ${this.tableHeight}px; ${this.styles}`
    },
    _class () {
      return this.$vnode.data.staticClass
    }
  },
  data () {
    return {
      tableHeight: 0
    }
  },
  mounted () {
    window.addEventListener('resize', this.setSmBoxHeight)
    this.$nextTick(() => {
      this.setSmBoxHeight()
    })
  },
  methods: {
    setSmBoxHeight (adjustment) {
      const offset = parseInt(this.offset) + 128
      const windowHeight = window.innerHeight
      this.tableHeight = parseInt(windowHeight) - offset
    }
  },
  beforeMount () {
    window.removeEventListener('resize', this.setSmBoxHeight)
  }
}
</script>

<style lang="stylus" scoped>
.smBox{
  overflow-y auto
}
</style>
