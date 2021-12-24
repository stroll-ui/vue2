<template>
  <div class="dialogBox sm-main-box">
    <h4 class="mb10">Modal 对话框</h4>
    <p class="mb20">
      需要处理事务，又不希望跳转页面打断工作流程时，可以采用对话框的形式，快速处理相应操作。
      除简单询问外通常还会有标题、任务表单等，是给予当前主页面之上的一种任务，承载用户需要完成的目标内容。
    </p>
    <ul>
      <li class="mb20">
        <a href="javascript:;" @click="dialog1 = true">对话框1</a>
      </li>
      <li class="mb20">
        <a href="javascript:;" @click="dialog2 = true">对话框2</a>
      </li>
      <li class="mb20">
        <a href="javascript:;" @click="dialog3 = true">对话框3</a>
      </li>
      <li class="mb20">
        <a href="javascript:;" @click="dialog4 = true">对话框4</a>
      </li>
    </ul>

    <smDialog type="primary" :visible="dialog1" :modal="false" @close="dialog1 = false">
      <span slot="title" class="dialog-title">
        <span>确认要删除这条信息吗？</span>
      </span>
      <div>
        <h1>这是一段描述信息，删除这条信息会造成的影响之类的解释信息。</h1>
      </div>
      <span slot="footer" class="dialog-footer">
        <smButton size="medium" @click="dialog1 = false">取 消</smButton>
        <smButton size="medium" type="primary" @click="dialog1 = false">按钮</smButton>
      </span>
    </smDialog>

    <smDialog type="warning" :visible="dialog2" :modal="false" @close="dialog2 = false">
      <span slot="title" class="dialog-title">
        <span>确认要删除这条信息吗？</span>
      </span>
      <div>
        <h1>这是一段描述信息，删除这条信息会造成的影响之类的解释信息。</h1>
      </div>
      <span slot="footer" class="dialog-footer">
        <smButton size="medium" @click="dialog2 = false">取 消</smButton>
        <smButton size="medium" type="primary" @click="dialog2 = false">按钮</smButton>
      </span>
    </smDialog>

    <smDialog type="error" :visible="dialog3" :modal="false" @close="dialog3 = false">
      <span slot="title" class="dialog-title">
        <span>确认要删除这条信息吗？</span>
      </span>
      <div>
        <h1>这是一段描述信息，删除这条信息会造成的影响之类的解释信息。</h1>
      </div>
       <span slot="footer" class="dialog-footer">
        <smButton size="medium" @click="dialog3 = false">取 消</smButton>
        <smButton size="medium" type="primary" @click="dialog3 = false">按钮</smButton>
      </span>
    </smDialog>

    <smDialog :visible="dialog4" :modal="false" @close="dialog4 = false">
      <span slot="title" class="dialog-title">
        <span>确认要删除这条信息吗？</span>
      </span>
      <div>
        <h1>这是一段描述信息，删除这条信息会造成的影响之类的解释信息。</h1>
      </div>
      <span slot="footer" class="dialog-footer">
        <smButton size="medium" @click="dialog4 = false">取 消</smButton>
        <smButton size="medium" type="primary" @click="dialog4 = false">按钮</smButton>
      </span>
    </smDialog>
  </div>
</template>

<script>
export default {
  name: 'dialogShow',
  title: '对话框',
  hide: false,
  data () {
    return {
      dialog1: false,
      dialog2: false,
      dialog3: false,
      dialog4: false
    }
  },
  methods: {
  }
}
</script>

<style scoped lang='stylus'>

</style>
