<template>
  <v-bottom-navigation
    v-model="page"
    fixed
    app
    grow
    background-color="dark"
    color="blue"
  >
    <v-btn>
      <v-icon>mdi-home</v-icon>
    </v-btn>

    <v-btn>
      <v-icon>mdi-magnify</v-icon>
    </v-btn>

    <v-btn>
      <v-icon>mdi-bell-outline</v-icon>
    </v-btn>

    <v-btn>
      <v-icon>mdi-email-outline</v-icon>
    </v-btn>
  </v-bottom-navigation>
</template>

<script>
export default {
  data: () => ({
    page: ''
  })
};
</script>
