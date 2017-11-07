<template>
  <div id="Users">
  <h1>hello users</h1>
    <ul>
    	<li v-for="user in users">
    		{{user}}
    	</li>
    </ul>

  </div>
</template>
<script>


export default {
 
  data(){
    return{
      users:["MiaoJie","BinJie","GaoJie"]
    }
  },
  methods:{
    
  }
}
</script>

<style scoped>
h1{
  color:red;
}
</style>