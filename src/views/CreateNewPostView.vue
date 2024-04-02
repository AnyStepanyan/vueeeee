<template>
    <v-sheet class="mx-auto ma-10" max-width="700">
        <h1 class="my-10">Create New Post</h1>
      <v-form fast-fail @submit.prevent>
        <v-text-field
          v-model="firstName"
          :rules="firstNameRules"
          placeholder="Title"
        ></v-text-field>
  
        <v-textarea placeholder="Write your content here"></v-textarea>

  
        <v-btn class="mt-2" type="submit" block>Submit</v-btn>
      </v-form>
    </v-sheet>
  </template>
    <script setup>
        </script>