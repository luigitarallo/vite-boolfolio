<script>
import ProjectCard from "./components/projects/ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      projects: [],
      api: {
        baseUrl: "http://localhost:8000/api/",
      },
    };
  },
  components: { ProjectCard },

  methods: {
    fetchProjects(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container">
    <h1>Luigi's Projects</h1>
    <div class="row rows-cols-4 g-3">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
  </div>
</template>

<style lang="scss"></style>
