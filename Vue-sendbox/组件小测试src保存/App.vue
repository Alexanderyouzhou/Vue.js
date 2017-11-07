/*template是我们需要用到的模板,模板里有且只能有一个跟标签*/
<template>
  <div id="app">
  <h1>{{title}}</h1>
  <p>{{greeting()}}</p>
  </div>
</template>
/*script标签中囊括的是所有的属性和方法
  export default{}:对外公开当前文件可被其他文件引入
  name: 给当前组件起名,此名字可以再其他组件中以标签的形式调用
  components:承载所有当前组件所有依赖的其他组件
*/

<script>


export default {
  name: 'app',
  data(){//相当于data:function
    return{
      title:"this is out first cli project"
    }
  },
  methods:{
    greeting:function(){
      return "hello Vue.js"
    }
  }

}
//拷贝的时候只拷贝src文件  因为他不那么大
</script>
<style>

</style>
