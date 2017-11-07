<template>
  <header>
  	<h1>{{title}}</h1>
  </header>
</template>
<script>


export default {
 
  data(){
    return{
     	title:"footer"
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
	header
	{
		background:red;
		padding:50px;
	}
	h1{
		color:#eee;
		text-aline:center;
	}
</style>