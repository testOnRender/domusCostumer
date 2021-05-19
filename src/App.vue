<template>
  <v-app>
    <v-app-bar app color="white" dark>
      <div class="d-flex align-center">
        <a href="/">
        <v-img class="shrink mr-2" contain src="@/assets/Domus.png" transition="scale-transition" width="50" height="50" gradient/>
        </a>
        <v-img class="shrink mr-2" contain src="@/assets/tittle.png" transition="scale-transition" width="100"  gradient/>

      </div>
      <v-spacer></v-spacer>
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<script>

export default {
  name: 'App',

  data: () => ({
    //
  }),
};
</script>

