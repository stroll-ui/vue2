# life-element

## 主题
模板文件路径 /public/element-variables.scss

```
npm run et-w  // 实时编译
npm run et-b  // 打包
```

## 组件
字体图标库 /src/assets/icon/iconfont.css  
初始化样式 /src/assets/style/init.styl  
公共样式 /src/assets/style/public.styl  
stylus 全局变量 /src/assets/style/variables.styl  
公共方法 /src/components/js/method.js  
公共js变量 /src/components/js/state.js  
组件打包入口 /src/components/main.js  
components 组件文件夹  
  title 组件中文名  
  name 调用时名称 名称以sm开头 驼峰方式  
view 开发时路由页面文件夹 （提供UI验收使用）  
  title 路由中文名称  
  name 路由路径  

组件里使用element-ui组件需要单独引入相应的组件和组件样式  
element-ui 组件样式在 /theme 目录下引入  
示例 /src/components/modules/button  
```
npm run dev   // 运行调试
npm run build // 打包
npm publish // 发布
```