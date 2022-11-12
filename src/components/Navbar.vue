<template>
  <div class="navbar">
    <v-btn variant="plain">
      <router-link to="/">Projects</router-link>
    </v-btn>
    <v-btn variant="plain">
      <router-link to="/devs">Devs</router-link>
    </v-btn>
  </div>
</template>

<style lang="scss" scoped>
.navbar {
  height: 50px;
  background: #fff;
  width: 100%;
  gap: 16px;

  display: flex;
  justify-content: center;
  align-items: center;

  a {
    color: black;
    text-decoration: none;
  }
}
</style>
