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
  <h1>Hello World!</h1>
  <ProjectCard />
</template>

<style lang="scss"></style>
