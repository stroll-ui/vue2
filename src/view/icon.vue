<template>
  <div class="iconBox sm-main-box">
    <div class="mb20 mt20">
      <smIcon class="gennlife_Menu_Quality1"></smIcon>
      <smIcon class="gennlife_Menu_Quality1" size="medium"></smIcon>
      <smIcon class="gennlife_Menu_Quality1" size="small"></smIcon>
    </div>
    <div class="mb20 mt20">
      <smIcon class="gennlife_Menu_Quality1" ></smIcon>
      <smIcon class="gennlife_Menu_Quality1" type="primary" ></smIcon>
      <smIcon class="gennlife_Menu_Quality1" type="success" ></smIcon>
      <smIcon class="gennlife_Menu_Quality1" type="info" ></smIcon>
      <smIcon class="gennlife_Menu_Quality1" type="warning" ></smIcon>
      <smIcon class="gennlife_Menu_Quality1" type="danger" ></smIcon>
    </div>
    <ul>
      <li @click="copy(`${iconName.css_prefix_text}${item.font_class}`)" class="icon" v-for="(item, index) in iconName.glyphs" :key="index">
        <i :class="`${iconName.css_prefix_text}${item.font_class}`"></i>
        <p>{{ iconName.css_prefix_text }}{{ item.font_class }}</p>
      </li>
    </ul>
  </div>
</template>

<script>
import { iconName } from './../components/main'
export default {
  name: 'iconShow',
  title: '图标',
  data () {
    return {
      iconName
    }
  },
  mounted () {},
  methods: {
    copy (val) {
      this.$copyText(val)
    }
  }
}
</script>

<style scoped lang='stylus'>
$borderStyle = 1px #eee solid;

.iconBox {
  &>ul{
    border-top: $borderStyle;
    border-left: $borderStyle;
  }
}

.icon {
  display: inline-block;
  text-align: center;
  cursor: pointer;
  padding: 10px;
  width: 220px;
  border-right: $borderStyle;
  border-bottom: $borderStyle;

  i {
    color #606266
    font-size 20px
    display inline-block
    margin-bottom 20px
  }
  p{
    font-size 12px
  }

  &:hover {
    i, p {
      color: #5cb6ff;
    }
  }
}
</style>
