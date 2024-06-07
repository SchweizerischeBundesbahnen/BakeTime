<template>

    <div class="flex flex-col">
      <h3 class="text-xl font-bold mb-6">AppBakery - BakeTime</h3>

      <p class="text-m mb-8">What's bakin'?</p>

      <div class="flex flex-row items-center gap-9">
        <img src="@/assets/bakingApps.png">

        <div class="flex flex-col gap-5">
          <div><RouterLink class="text-blue-500 hover:text-red-500 transition-colors" to="/appbakers">AppBakers</RouterLink></div>
          <div><RouterLink class="text-blue-500 hover:text-red-500 transition-colors" to="/pastries">Pastries</RouterLink></div>

        </div>

      </div>
      

  </div>
</template>
  
<script setup lang="ts">
</script>

