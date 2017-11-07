// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
// es6语法
import Vue from 'vue'
import App from './App'
//import Users from './components/Users'

Vue.config.productionTip = false
// 注册全局组件(sbqname,{})
//Vue.component("users",Users)

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
/*
	index.html:整个项目的入口文件
	main.js:整个项目的逻辑主文件
	Vue实例：vue的实例化对象，包含el / tem / components
	template:模板中可以写html/ 调用其他组件
	</App>:代表模板要执行的组件文件，跟app.vue中的name属性有关
	components:组件组中要包含需要调用的组件名，例如上面模板调用了</App>,那么组件组中就一定要包含App组件
	import:用于导入需要依赖的文件，例如，上方组件组中想要引入App组件，那么首先要使用import引入这个组件文件
	import..from..:import后面是自己起的名字，from后面是组件的名字
	脚手架中默认没分号



*/
// 组件嵌套: 至少有俩个组件(包括根组件)
// 组件注册: 需要在main.js中注册  注册后可以再任何有关联的组件中使用
// 局部组件: 在当前组件中引入,只能在当前组件中使用
// 嵌套流程: 
          //1.设计组件内容
          //2.在引入组件中<app.vue>,script里import上方组件
          //3.在引入组件中<app.vue>,export里components进行注册
          //4.在引入组件template中<app.vue>进行使用<users></users>