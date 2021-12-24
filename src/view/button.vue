<template>
  <smBox class="buttonBox sm-main-box">
    <ul ref="ul">
      <h4>下拉按钮</h4>
      <li>
        <smDropdown :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
        <smDropdown size="medium" :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
        <smDropdown size="small" :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
        <smDropdown size="mini" :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
      </li>
      <li class="mt10">
        <smDropdown icon="gennlife_Menu_Collect" :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
        <smDropdown icon="gennlife_Menu_Collect" size="medium" :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
        <smDropdown icon="gennlife_Menu_Collect" size="small" :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
        <smDropdown size="mini" :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
      </li>

      <h4>下拉按钮</h4>
      <li>
        <smDropdown icon="gennlife_Menu_Quality1" plain :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
        <smDropdown icon="gennlife_Menu_Quality1" plain size="medium" :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
        <smDropdown icon="gennlife_Menu_Quality1" plain size="small" :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
        <smDropdown size="mini" plain :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
      </li>

      <h4>下拉按钮</h4>
      <li>
        <smDropdown icon="gennlife_Menu_Quality1" disabled :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
        <smDropdown icon="gennlife_Menu_Quality1" disabled size="medium" :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
        <smDropdown icon="gennlife_Menu_Quality1" disabled size="small" :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
        <smDropdown size="mini" :disabled="true" :item="[{val: 'sss'}, {val: 'sss'}]">
          更多菜单
        </smDropdown>
      </li>

      <h4>强提示按钮</h4>
      <li>
        <smButton @click="onClick()">按钮</smButton>
        <smButton type="primary" @click="onClick()">按钮</smButton>
        <smButton type="success" @click="onClick()">按钮</smButton>
        <smButton type="info" @click="onClick()">按钮</smButton>
        <smButton type="warning" @click="onClick()">按钮</smButton>
        <smButton type="danger" @click="onClick()">按钮</smButton>
      </li>

      <h4>弱提示按钮</h4>
      <li class="mt10">
        <smButton plain @click="onClick()">按钮</smButton>
        <smButton type="primary" plain @click="onClick()">按钮</smButton>
        <smButton type="success" plain @click="onClick()">按钮</smButton>
        <smButton type="info" plain @click="onClick()">按钮</smButton>
        <smButton type="warning" plain @click="onClick()">按钮</smButton>
        <smButton type="danger" plain @click="onClick()">按钮</smButton>
      </li>

      <h4>椭圆按钮</h4>
      <li class="mt10">
        <smButton round @click="onClick()">按钮</smButton>
        <smButton type="primary" round @click="onClick()">按钮</smButton>
        <smButton type="success" round @click="onClick()">按钮</smButton>
        <smButton type="info" round @click="onClick()">按钮</smButton>
        <smButton type="warning" round @click="onClick()">按钮</smButton>
        <smButton type="danger" round @click="onClick()">按钮</smButton>
      </li>

      <h4>禁用按钮</h4>
      <li class="mt10">
        <smButton disabled @click="onClick()">按钮</smButton>
        <smButton type="primary" disabled @click="onClick()">按钮</smButton>
        <smButton type="success" disabled @click="onClick()">按钮</smButton>
        <smButton type="info" disabled @click="onClick()">按钮</smButton>
        <smButton type="warning" disabled @click="onClick()">按钮</smButton>
        <smButton type="danger" disabled @click="onClick()">按钮</smButton>
      </li>

      <li class="mt10">
        <smButton plain disabled @click="onClick()">按钮</smButton>
        <smButton type="primary" plain disabled @click="onClick()">按钮</smButton>
        <smButton type="success" plain disabled @click="onClick()">按钮</smButton>
        <smButton type="info" plain disabled @click="onClick()">按钮</smButton>
        <smButton type="warning" plain disabled @click="onClick()">按钮</smButton>
        <smButton type="danger" plain disabled @click="onClick()">按钮</smButton>
      </li>

      <li class="mt10">
        <smButton round disabled @click="onClick()">按钮</smButton>
        <smButton type="primary" round disabled @click="onClick()">按钮</smButton>
        <smButton type="success" round disabled @click="onClick()">按钮</smButton>
        <smButton type="info" round disabled @click="onClick()">按钮</smButton>
        <smButton type="warning" round disabled @click="onClick()">按钮</smButton>
        <smButton type="danger" round disabled @click="onClick()">按钮</smButton>
      </li>

      <h4>按钮大小类型</h4>
      <li class="mt10">
        <smButton type="primary" size="default" @click="onClick()">按钮</smButton>
        <smButton type="primary" size="medium" @click="onClick()">按钮</smButton>
        <smButton type="primary" size="small" @click="onClick()">按钮</smButton>
        <smButton type="primary" size="mini" @click="onClick()">按钮</smButton>
      </li>

      <li class="mt10">
        <smButton type="primary" plain @click="onClick()">按钮</smButton>
        <smButton type="primary" plain size="medium" @click="onClick()">按钮</smButton>
        <smButton type="primary" plain size="small" @click="onClick()">按钮</smButton>
      </li>

      <li class="mt10">
        <smButton type="primary" round @click="onClick()">按钮</smButton>
        <smButton type="primary" round size="medium" @click="roundMedium()">按钮</smButton>
        <smButton type="primary" round size="small" @click="onClick()">按钮</smButton>
      </li>

      <h4>图标+文字按钮</h4>
      <li>
        <smButton type="primary" icon="gennlife_Act_OffLine" @click="onClick()">按钮</smButton>
        <smButton type="primary" icon="gennlife_Act_OffLine" size="medium" @click="onClick()">按钮</smButton>
        <smButton type="primary" icon="gennlife_Act_OffLine" size="small" @click="onClick()">按钮</smButton>
      </li>

      <h4>图标按钮</h4>
      <li>
        <smButton type="primary" icon="gennlife_Act_OffLine" round size="default" @click="onClick()"></smButton>
        <smButton type="primary" icon="gennlife_Act_OffLine" round size="medium" @click="onClick()"></smButton>
        <smButton type="primary" icon="gennlife_Act_OffLine" round size="small" @click="onClick()"></smButton>
      </li>
      <li>
        <smButton type="primary" icon="gennlife_Act_OffLine" plain round size="default" @click="onClick()"></smButton>
        <smButton type="primary" icon="gennlife_Act_OffLine" plain round size="medium" @click="onClick()"></smButton>
        <smButton type="primary" icon="gennlife_Act_OffLine" plain round size="small" @click="onClick()"></smButton>
      </li>
      <li>
        <smButton type="" icon="gennlife_Act_OffLine" round size="default" @click="onClick()"></smButton>
        <smButton type="" icon="gennlife_Act_OffLine" round size="medium" @click="onClick()"></smButton>
        <smButton type="" icon="gennlife_Act_OffLine" round size="small" @click="onClick()"></smButton>
        <smButton type="" icon="gennlife_Act_OffLine" round size="mini" @click="onClick()"></smButton>
      </li>

    </ul>
  </smBox>
</template>

<script>
export default {
  name: 'buttonShow',
  title: '按钮',
  data () {
    return {
    }
  },
  methods: {
    onClick () {
      // console.log(this.$refHeight('ul'), this.$refWidth('ul'))
    },
    roundMedium () {
      this.$setRefStyle('ul', 100)
    }
  }
}
</script>

<style scoped lang='stylus'>
</style>
