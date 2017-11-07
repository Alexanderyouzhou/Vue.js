// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App/>',
  components: { App }
})
/*	index.html整个项目的入口文件
	main.js 整个项目的逻辑主文件
	vue实例:Vue的实例化对象包含: element/template/com
	template:模板中可以写html 或者调用其他组件
	</App>:代表模板要执行的组件文件,跟App.vue中的name属性有关
	comp:组件组重要包含需要调用的组件名.  
	     例如上面模板调用了appname组件组中就一定要包含app组件
	import:import 用于导入需要依赖的文件,例如在上方组件组中,想要引入app组件那么先去引入import组件
	import .. from ..:import后面是自己起的名字,from后面是自己的名字

*/