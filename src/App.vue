<template>
  <v-app id="inspire">
    <v-app-bar app color="white" flat>
      <v-container class="py-0 fill-height">
        <v-avatar class="ml-10">
          <img src="https://cdn.vuetifyjs.com/images/john.jpg" alt="John" />
        </v-avatar>

        <v-btn v-for="link in navLinks" :key="link.title" :to="link.goTo" text>
          {{ link.title }}
        </v-btn>

        <v-spacer></v-spacer>

        <v-responsive max-width="260">
          <v-text-field
            dense
            flat
            hide-details
            rounded
            solo-inverted
          ></v-text-field>
        </v-responsive>
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
      { title: "Dashboard", goTo: "/" },
      { title: "Messages", goTo: "/link2" },
      { title: "Profile", goTo: "/link3" },
      { title: "Updates", goTo: "/link4" },
    ],
  }),
};
</script>
