<!-- template:使我们需要用的模板,模板中有且只能有一个根标签-->
<template>
  <div id="app">
    <app-header></app-header>
    <app-footer></app-footer>
    <app-users></app-users>
  </div>
</template>

<!-- 行为script：标签中囊括的是所有的属性和方法 
      export default{}:对外公开当前文件，可被其他文件引入
      name:给当前组件起名，此名字可以在其他组件中以标签的形式调用
      components：承载所有当前组件需要依赖的其他组件
      style:样式
-->
<script>
import header from './components/header'
import footer from './components/footer'
import Users from './components/Users'

export default{
  name: 'app',
  components:{
    "app-header":header,
    "app-footer":footer,
    "app-users":Users,
  },
  data(){
    return{
      
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
    
</style>

