<template>
  <div class="header">
    <div class="header-left">
      <img src="@/assets/app_bakery_logo_simplified.svg" alt="AppBakery Logo" class="logo" />
      <RouterLink to="/" class="nav-link">
        <h3 class="text-xl font-bold">BakeTime</h3>
      </RouterLink>
    </div>

    <div class="header-right">
      <RouterLink to="/about" class="nav-link">What's bakin'?</RouterLink>
      <RouterLink to="/bakers" class="nav-link">Bakers</RouterLink>
      <RouterLink to="/pastries" class="nav-link">Pastries</RouterLink>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: 'NavigationHeader',
};
</script>

<style scoped>
.nav-link {
  color: black;
  text-decoration: none;
  padding: 0;
  background-color: transparent;
  border: none;
}

.nav-link:hover {
  color: gray;
  background-color: transparent;
  border: none;
}

img {
  max-width: 100%;
  height: auto;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px;
  max-width: 1200px;
  margin: 0 auto;
  background-color: #fff;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 999;
  height: 80px;
}

.header-left {
  display: flex;
  align-items: center;
}

.logo {
  height: 40px;
  width: 40px;
  margin-right: 10px;
}

.header-right {
  display: flex;
  gap: 30px;
}

.nav-link {
  color: black;
}

@media (max-width: 768px) {
  .header {
    padding: 10px 20px;
  }
}

@media (max-width: 576px) {
  .header {
    padding: 10px;
  }
}
</style>
