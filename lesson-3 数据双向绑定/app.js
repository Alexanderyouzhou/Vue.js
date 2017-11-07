new Vue({
	el:"#vue-app",
	data:{//对象存储属性  有key和value
		age:18,
		name:"揽月",
		
	},	
	methods:{
		
		logName:function(){
			//console.log(this.$refs.name1.value)
			this.name=this.$refs.name1.value
		},
		logAge:function(){
			this.age=this.$refs.age.value
		},
	}
		
		// v-model: 双向数据绑定的命令,应用于input / textarea / select
		// ref:是一种方法,通过调用函数实现,v-model是另一种,只需要写在input里面不需要调用函数
		//     用于设置原宿卫衣标示,通过refs获取元素值	
})
