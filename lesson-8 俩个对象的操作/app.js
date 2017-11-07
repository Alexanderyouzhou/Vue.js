

 var one = new Vue({
     el:"#vue-app-one",
     data:{
       title:"this is vue-app-one",
     }, 
     methods:{
      click:function(){
        one.title="已经改变了";
      },

     },
     computed:{
      greet:function(){
        return "hello app1"
      }
     }    
 });
 var two=new Vue({
     el:"#vue-app-two",
     data:{
       title:"this is vue-app-two",
     }, 
     methods:{
        click2:function(){
        two.title="已经改变了";
      },

     },
      computed:{
      greet:function(){
        return "hello app1"
      }
     }        
 });
 
//v-for: 用于遍历数组和对象
//in:  是变量和属性的分割线
//变量: 随便起什么名字,用的时候就写什么
//属性: 一定来自于data对象
//数组: 遍历数组时默认传的值为数组元素,第二个值为数组下标
//对象: 遍历对象时,第一个值是key,第二个值是val

	