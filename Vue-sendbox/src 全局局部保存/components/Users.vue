<template>
  <div id="Users">
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

<style>

</style>