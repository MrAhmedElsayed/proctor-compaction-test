<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="ml-10" size="32">
          <img src="./assets/chemistry-ideogram.svg" alt="logo" />
        </v-avatar>
        <v-spacer></v-spacer>
        <v-btn v-for="link in navLinks" :key="link.title" :to="link.goTo" text>
          {{ link.title }}
        </v-btn>
      </v-container>
    </v-app-bar>

    <v-main class="grey lighten-3">
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
  data: () => ({
    navLinks: [
      { title: "الرئيسية", goTo: "/" },
      { title: "شرح", goTo: "/link2" },
    ],
  }),
};
</script>
