new Vue({
	el:"#vue-app",
	data:{//对象存储属性  有key和value
		name:"橙子",
		job:"web开发",
		website:"http://www.thenewstep.com",
		websiteTag:"<a href='http://www.thenewstep.com'>thenewstep </a>"
	},	
	methods:{
		greet:function(time){
			return "good morning"+time+" "+this.name+"!";
		}
	}
	// 注意 这里的data和methods  是不用调用的他可以 直接调用data和methods
	// 就是不写this.data或this.methods
})
/*el:element-需要控制的标签元素  在html中有且仅有一个根标签
  data:用于存储各个类型的数据<array,object,string,number>   就存数据
  methods:用于存取各种方法  就存放法
  v-bind:用于绑定某个属性<指令>
  v-html:用于给某个标签绑定值为标签的属性
  ":"   :是v-bind的语法糖,和v-bing有相同的效果
*/