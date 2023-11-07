<script>
import { RouterView } from "vue-router";
import ProjectCard from "./components/projects/ProjectCard.vue";
import axios from "axios";

export default {
  data() {
    return {
      // Array vuoto iniziale dove salvare i dati ricevuti dalla richiesta axios
      projects: [],
      // Url base che contiene le api generate su laravel
      api: {
        baseUrl: "http://localhost:8000/api/",
      },
      // Oggetto vuoto iniziale che conterrà i link delle pagine
      pagination: { links: null },
    };
  },
  components: { ProjectCard, RouterView },

  methods: {
    fetchProjects(uri = this.api.baseUrl + "projects") {
      axios.get(uri).then((response) => {
        this.projects = response.data.data;
        this.pagination.links = response.data.links;
      });
    },
  },

  created() {
    this.fetchProjects();
  },
};
</script>

<template>
  <div class="container my-3">
    <h1>Luigi's Projects</h1>

    <router-view></router-view>
    <div class="row row-cols-4 g-3">
      <ProjectCard v-for="project in projects" :project="project" />
    </div>
    <nav aria-label="Page navigation example">
      <ul class="pagination my-2">
        <li
          @click="fetchProjects(link.url)"
          v-for="link in pagination.links"
          class="page-item"
        >
          <a class="page-link" href="#" v-html="link.label"></a>
        </li>
      </ul>
    </nav>
  </div>
</template>

<style lang="scss"></style>
