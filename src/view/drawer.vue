<template>
  <div class=" sm-main-box">
    <smButton @click="drawer = true">打开</smButton>
    <smDrawer
      title="我是标题"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
    >
      <h1>sssss</h1>
    </smDrawer>

    <smButton @click="drawer = true" type="primary" style="margin-left: 16px;">
      点我打开
    </smButton>

    <smDrawer
      title="我是外面的 Drawer"
      :visible.sync="drawer"
      size="50%">
      <div>
      <smButton @click="innerDrawer = true">打开里面的!</smButton>
      <smDrawer
        title="我是里面的"
        :append-to-body="true"
        :before-close="handleClose"
        :visible.sync="innerDrawer">
        <p>_(:зゝ∠)_</p>
      </smDrawer>
      </div>
    </smDrawer>
  </div>
</template>

<script>
export default {
  name: 'drawerShow',
  title: '抽屉',
  hide: false,
  data () {
    return {
      drawer: false,
      innerDrawer: false,
      direction: 'rtl'
    }
  },
  methods: {
    handleClose (done) {
      this.$confirm('确认关闭？')
        .then(_ => {
          done()
        })
        .catch(_ => {})
    }
  }
}
</script>

<style scoped lang='stylus'>

</style>
