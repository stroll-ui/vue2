<template>
  <div class=" sm-main-box">
    <smBadge :value="12" class="item">
      <smButton size="small">评论</smButton>
    </smBadge>
    <smBadge :value="300" :max="99" class="item">
      <smButton size="small">回复</smButton>
    </smBadge>
    <smBadge :value="1" class="item" type="primary">
      <smButton size="small">评论</smButton>
    </smBadge>
    <smBadge :value="2" class="item" type="warning">
      <smButton size="small">回复</smButton>
    </smBadge>
    <smBadge is-dot :value="2" class="item" type="warning">
      <smButton size="small">回复</smButton>
    </smBadge>
    <smBadge is-dot :value="2" class="item" type="warning">
      <smButton size="mini">回复</smButton>
    </smBadge>
    <smTag @close="tagClose" class="item" size="small" closable >
      回复
    </smTag>
    <smTag @close="tagClose" class="item" size="small" closable >
      回复
    </smTag>
  </div>
</template>

<script>
export default {
  name: 'tagShow',
  title: '标记',
  hide: false,
  data () {
    return {
    }
  },
  methods: {
    tagClose (val) {
      console.log(val)
    }
  }
}
</script>

<style scoped lang='stylus'>
.sm-badge{
  margin-right: 30px
}
</style>
