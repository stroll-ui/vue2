<script>
import { Dropdown, DropdownMenu, DropdownItem } from 'element-ui'
import {
  primaryColor,
  defaultPaddingV,
  defaultPaddingH,
  mediumPaddingV,
  mediumPaddingH,
  smallPaddingV,
  smallPaddingH,
  defaultHeight,
  mediumHeight,
  smallHeight,
  fontSizeLarge,
  fontSizeMedium,
  fontSizeBase,
  fontSizeSmall
} from '@styl'
const smallPaddingTop = parseInt(smallPaddingV) - 2
const smallPaddingLeft = parseInt(smallPaddingH) - 2
const mediumPaddingTop = parseInt(mediumPaddingV) - 2
const mediumPaddingLeft = parseInt(mediumPaddingH) - 5
const defaultPaddingTop = parseInt(defaultPaddingV) - 1
const defaultPaddingLeft = parseInt(defaultPaddingH)
export default {
  title: '下拉',
  name: 'smDropdown',
  components: { Dropdown, DropdownMenu, DropdownItem },
  data () {
    return {
      sizeType: {
        mini: {
          Left: '0px',
          Top: '0px',
          Right: '0px',
          Height: '0px',
          Class: 'sm-button-mini',
          iconSize: fontSizeSmall,
          Style: `border: 0;
          background-color: rgba(0, 0, 0, 0);
          color: rgba(0, 0, 0, 0.65);`
        },
        small: {
          Left: smallPaddingLeft,
          Top: smallPaddingTop,
          Right: '0px',
          Height: smallHeight,
          Class: 'sm-button-small',
          iconSize: fontSizeBase,
          Style: `padding: ${
            smallPaddingTop
          }px ${
            smallPaddingLeft
          }px;font-size: ${fontSizeBase}px;`
        },
        medium: {
          Top: mediumPaddingTop,
          Left: mediumPaddingLeft,
          Right: '0px',
          Height: mediumHeight,
          Class: 'sm-button-medium',
          iconSize: fontSizeMedium,
          Style: `padding: ${
            mediumPaddingTop
          }px ${
            mediumPaddingLeft
          }px;font-size: ${fontSizeMedium}px;`
        },
        default: {
          Top: defaultPaddingTop,
          Left: defaultPaddingLeft,
          Right: '0px',
          Height: defaultHeight,
          Class: 'sm-button-default',
          iconSize: fontSizeLarge,
          Style: `padding: ${
            defaultPaddingTop
          }px ${
            defaultPaddingLeft
          }px;font-size: ${fontSizeLarge}px;`
        }
      },
      plain: {
        default: {},
        hover: {},
        focus: {}
      }
    }
  },
  render (h, _) {
    const { size, icon, disabled, item: itemList = [] } = this.$attrs
    let { Class, Style, Height, Left, iconSize } = this.sizeType[size || 'default']
    const attrsKeys = Object.keys(this.$attrs)
    const defaultSlot = this.$slots.default
    const el = []
    itemList.forEach(item => {
      el.push(h('DropdownItem', {}, item.val))
    })
    if (attrsKeys.includes('plain')) {
      Class = `${Class} sm-dropdown-plain`
      Style = `${Style};
      ${size !== 'mini' ? `border-color: #D9D9D9;background-color: rgba(225,225,225,0);` : ''}
      color: rgba(0, 0, 0, 0.65);`
    }
    if (['', true].includes(disabled)) {
      Style = `${Style};
      cursor: not-allowed;
      ${size !== 'mini' ? `border-color: #D9D9D9;background-color: #F5F5F5;` : ''}
      color: #D9D9D9;`
    }
    const button = [
      h('span', { style: `margin-right: ${parseInt(Left)}px` }, defaultSlot),
      h('i', {
        class: 'el-icon-arrow-down el-icon--right',
        style: ''
      })
    ]
    if (icon) {
      button.unshift(h('i', { class: icon, style: `font-size: ${iconSize}` }))
    }
    if (size !== 'mini') {
      button.unshift(h('i', {
        class: `sm-splitLine ${attrsKeys.includes('plain') && 'sm-splitLine-plain'}`,
        style: `height: ${
          Height
        };`
      }))
    }
    return h('Dropdown', {
      class: 'sm-dropdown-button',
      style: ``,
      props: { ...this.$attrs },
      on: {
        visibleChange: function (val) {
          console.log(val)
        },
        ...this.$listeners
      }
    }, [
      h('div', {
        class: `cp ${Class}`,
        style: `background-color: ${
          primaryColor
        }; color: #fff; border-radius: 4px; ${
          Style
        };`
      }, button),
      h('DropdownMenu', {
        props: { ...this.$attrs },
        on: { ...this.$listeners }
      }, el)
    ])
  }
}
</script>

<style lang="stylus" scoped>
@import url('~@theme/dropdown.css')
@import url('~@theme/dropdown-menu.css')
@import url('~@theme/dropdown-item.css')

.sm-dropdown-button + .sm-dropdown-button {
  margin-left 8px
}
.sm-dropdown-button {
  position relative

  .sm-splitLine {
    position absolute
    width 1px
    top 0px
    background-color #ccc
  }
  .sm-splitLine-plain{
    background-color: #D9D9D9;
  }
}
.cp{
  border 1px solid #0087FF
  &:hover {
    opacity 0.7
  }
}
.cp.sm-dropdown-plain{
  &:hover {
    border-color #2698FF !important
    /deep/ .sm-splitLine.sm-splitLine-plain{
      background-color #2698FF
    }
  }
}

.sm-button-default {
  // padding 11px 16px
  .sm-splitLine {
    right 50px
  }
}

.sm-button-medium {
  // padding 8px 16px
  .sm-splitLine {
    right 36px
  }
}

.sm-button-small {
  // padding 8px 16px
  .sm-splitLine {
    right 32px
  }
}

.sm-button-mini {
  // padding 8px 16px
  .sm-splitLine {
    right 0px
  }
}

.sm-button-mini {
  .el-icon-arrow-down.el-icon--right {
    margin-left: 0px;
  }
}
</style>
