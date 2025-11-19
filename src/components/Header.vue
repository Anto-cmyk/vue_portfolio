<script setup >

</script>


<template >
    <header class="fixed sm:fixed w-full h-20 bg-slate-900 text-white flex sm:flex-row flex-col border sm:leading-[70px] text-[16px] shadow-lg shadow-black/30">
        <!-- first column -->
        <div class="flex sm:basis-[50%] sm:pl-1 pl-2 underline">
            <h3 class="text-amber-500 italic font-bold">A</h3>
            <h4 class="text-gray-100 ">ntony</h4>
        </div>
        <!-- second column -->
        <div class="sm:basis-[50%] basis-[77%] flex justify-around items-center text-[15px]">
           <router-link to="/">Home</router-link>
           <router-link to="/skills">Skills</router-link>
           <router-link to="/projects">Projects</router-link>
           <router-link to="/contacts">Contacts</router-link>
        </div>
    
    </header> 
    <br></br><br><br>


</template>

<style scoped>

</style>