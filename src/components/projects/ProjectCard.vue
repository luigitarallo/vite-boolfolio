<script>
export default {
  data() {
    return {};
  },
  props: {
    project: Object,
    isDetail: Boolean,
  },
};
</script>

<template>
  <div class="col">
    <div class="card h-100" style="width: 18rem">
      <div class="card-header text-bg-primary py-2">
        {{ project.name }}
      </div>
      <div class="card-body">
        <strong>Type: </strong>
        <span
          v-if="project.type"
          class="badge"
          :style="{ backgroundColor: project.type.color }"
        >
          {{ project.type.name }}
        </span>
        <span class="badge text-bg-warning" v-else>Not defined</span>

        <h6 class="card-text mb-2">
          <br />
          <strong>Technologies: </strong> <br />
          <span
            v-if="project.technologies.length > 0"
            v-for="technology in project.technologies"
            class="badge rounded-pill m-1"
            :style="{ backgroundColor: technology.color }"
            >{{ technology.name }}</span
          >
          <span v-else class="badge rounded-pill text-bg-info m-1"
            >Not defined</span
          >
        </h6>
        <p class="card-text">
          <strong>Description: </strong>{{ project.description }}
        </p>
        <a :href="project.link">Link</a>
      </div>
      <div class="card-footer text-body-secondary text-center" v-if="!isDetail">
        <router-link
          :to="{ name: 'project-detail', params: { id: project.id } }"
          class="btn btn-primary"
          >Details</router-link
        >
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
