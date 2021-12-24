<template>
  <div class=" sm-main-box">
    <smInput type="text" class="mt10" disabled v-model="text"></smInput>
    <smInput type="text" class="mt10" clearable v-model="text"></smInput>
    <smInput type="text" size="medium" class="mt10" clearable v-model="text"></smInput>
    <smInput type="text" size="small" class="mt10" clearable v-model="text"></smInput>
    <smInput type="text" size="mini" class="mt10" clearable v-model="text"></smInput>
    <smInput type="text" class="mt10" v-model="text">
      <template slot="prepend">Http://</template>
    </smInput>
    <smInput type="text" class="mt10" v-model="text">
      <template slot="append">.com</template>
    </smInput>
    <smInput type="text" class="mt10" v-model="text">
      <smSelect v-model="select" :optionList='prependList' slot="prepend"></smSelect>
    </smInput>
    <smInput type="text" class="mt10" v-model="text">
      <smSelect v-model="select" :optionList="appendList" slot="append"></smSelect>
    </smInput>
    <smInput type="text" class="mt10" v-model="text" clearable :maxlength="10" show-word-limit></smInput>
    <smInput type="textarea" class="mt10"  v-model="text" :maxlength="10" show-word-limit></smInput>
  </div>
</template>

<script>
export default {
  name: 'inputShow',
  title: '输入框',
  data () {
    return {
      text: '',
      select: '1',
      prependList: [
        { val: 'http://', key: '1' },
        { val: 'https://', key: '2' }
      ],
      appendList: [
        { val: '.com', key: '1' },
        { val: '.run', key: '2' },
        { val: '.cn', key: '3' }
      ]
    }
  },
  methods: {}
}
</script>

<style scoped lang='stylus'>

</style>
