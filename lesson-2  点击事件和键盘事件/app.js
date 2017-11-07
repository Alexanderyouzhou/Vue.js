new Vue({
	el:"#vue-app",
	data:{//对象存储属性  有key和value
		age:18,
		x:0,
		y:0,
	},	
	methods:{
		addage:function(inc){
			//console.log("加一岁")
			this.age+=inc;
		},
		subtractage:function(dec){
			//console.log("减一岁")
			this.age-=dec;
		},
		moveXY:function(e){
			//事件兼容不用谢
			console.log(e);
			this.x=e.offsetX;
			this.y=e.offsetY;
			//事件: 是按钮接触时处理逻辑的方法
			//v-on: 给某个事件<click>绑定到某个元素上
			//"@": 语法糖和v-on一样
			//事件值:可以是对应的方法也可以是具体的属性
			//优先级:首先找方法没有方法找属性
			//事件修饰符:stop阻止冒泡事件
		},
		stopPropagation:function(e){
			e.stopPropagation();
			//这个方法写上在对应的标签 这里是span就不会增加 这是阻止默认事件
		},
		alert:function(){
			alert("hello");
		},
		logName:function(){
			console.log(123)
		},
		logAge:function(){
			console.log(456)
		},
	}
	// 事件修饰符
	// stop:阻止默认时间
	// once:时间只生效一次
	// prevent:阻止默认时间
})
/*el:element-需要控制的标签元素  在html中有且仅有一个根标签
  data:用于存储各个类型的数据<array,object,string,number>   就存数据
  methods:用于存取各种方法  就存放法
  v-bind:用于绑定某个属性<指令>
  v-html:用于给某个标签绑定值为标签的属性
  ":"   :是v-bind的语法糖,和v-bing有相同的效果
*/