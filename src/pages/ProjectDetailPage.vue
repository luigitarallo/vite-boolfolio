<script>
import ProjectCard from "../components/projects/ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      project: null,
      api: {
        baseUrl: "http://localhost:8000/api/",
      },
    };
  },
  components: { ProjectCard },
  created() {
    axios
      .get(this.api.baseUrl + "projects/" + this.$route.params.id)
      .then((response) => {
        this.project = response.data;
      });
  },
};
</script>

<template>
  <ProjectCard :project="project" :isDetail="true" v-if="project" />
</template>

<style lang="scss" scoped></style>
