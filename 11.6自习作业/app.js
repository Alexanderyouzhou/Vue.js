new Vue({
	el:"#vue-app",
	data:{	
			width:500,
			src:"img/2.png",
			src1:"img/1.png"		
	},
	methods:{
		comclass:function(){
			
       			this.width-=50;
       		
		},
		comclass2:function(){
			
       			this.width=500;
       		
		},
	}

})