<script>
import ProjectCard from "./ProjectCard.vue";
import axios from "axios";
export default {
  data() {
    return {
      api: {
        baseUrl: "http://localhost:8000/api/",
      },
      projects: [],
    };
  },
  components: { ProjectCard },

  created() {
    axios
      .get(this.api.baseUrl + "projects-by-type/" + this.$route.params.type_id)
      .then((response) => {
        this.projects = response.data;
      });
  },
};
</script>

<template>
  <div class="container">
    <h1 class="my-2">
      Projects Type:
      <span
        v-if="projects.type"
        class="badge"
        :style="{ backgroundColor: projects.type.color }"
        >{{ projects.type.name }}</span
      >
    </h1>
    <div class="row row-cols-4 g-3">
      <ProjectCard
        class="col"
        v-for="project in projects.projects"
        :project="project"
        :isDetail="false"
      />
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
