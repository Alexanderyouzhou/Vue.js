//组件
Vue.component("greeting",{
  template:'<p>{{name}}:hello cpmponent !!!  <button v-on:click="changeName">change</button>  </p>',
  data:function(){
    return {
      name:"喵姐",
    }
  },
  methods:{
    changeName:function(){
      this.name="张然";
    }
  }
  })
//第一个参数 组件名字
//第二个参数 下面那俩对象共同的东西
 var one = new Vue({
     el:"#vue-app-one",
     
     
 });
 var two=new Vue({
     el:"#vue-app-two",
    
 });

 //component: 组建的作用是抽离vue实例中的属性和方法  
 //vue-component: 包含 模板<html> 属性<data> 方法<methods..>
 //template: 模板中有且只能有一个根标签
 


	