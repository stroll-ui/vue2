<template>
  <div class="alertBox sm-main-box">
    <h4 class="mb10">Alert 警告提示</h4>
    <p class="mb20">当产品中某个页面或模块需要向用户显示警告信息时使用些类形式；
      该信息以静态的形式展现，不会自动消失，用户可以点击关闭Icon自行关闭。
    </p>
    <ul>
      <li class="mb20">
        <smAlert title="恭喜！你所提交的信息已经审核通过，如有问题请联系客服。" type="success" show-icon></smAlert>
      </li>
      <li class="mb20">
        <smAlert title="你好！欢迎使用智能监管平台，你可以根据自身需求添加业务模块。" type="info" show-icon></smAlert>
      </li>
      <li class="mb20">
        <smAlert title="系统将于 15 : 00 - 17 : 00 进行升级，请及时保存你的资料！" type="warning" show-icon></smAlert>
      </li>
      <li class="mb20">
        <smAlert title="系统错误，请稍后重试。" type="error" show-icon></smAlert>
      </li>

      <li class="mb20">
        <smAlert title="你好！欢迎使用智能监管平台，如有疑问请咨询在线客服。" type="info" show-icon close-text="查看详情" @close="onClick"></smAlert>
      </li>
      <li class="mb20">
        <smAlert title="系统繁忙，请稍后重试。" type="warning" show-icon close-text="查看详情" @close="onClick"></smAlert>
      </li>

      <li class="mb20">
        <smAlert title="已成功" description="你所提交的信息已经审核通过，请及时跟进申请状况。如有问题，请联系审核人员或在线客服。" type="success" show-icon></smAlert>
      </li>
      <li class="mb20">
        <smAlert title="帮助信息" description="你好，由于你的良好信用，我们决定赠送你三个月产品会员，欲了解会员特权与活动请进首页会员专区查看。" type="info" show-icon></smAlert>
      </li>
      <li class="mb20">
        <smAlert title="请注意！" description="你的账户会员使用权限将在3天后到期，请及时跟进申请状况。如有问题，请联系审核人员。" type="warning" show-icon></smAlert>
      </li>
      <li class="mb20">
        <smAlert title="出错了！" description="你所提交的信息已经审核失败，可以进入个人信箱查看原因，如有疑问，请联系客服人员，谢谢！" type="error" show-icon></smAlert>
      </li>
    </ul>

  </div>
</template>

<script>
export default {
  name: 'alertShow',
  title: '警告',
  hide: false,
  data () {
    return {
    }
  },
  methods: {
    onClick () {
      alert('查看详情')
    }
  }
}
</script>

<style scoped lang='stylus'>

</style>
