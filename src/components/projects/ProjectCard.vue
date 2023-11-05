<script>
export default {
  data() {
    return {};
  },
  props: {
    project: Array,
  },
};
</script>

<template>
  <div class="col">
    <div class="card h-100" style="width: 18rem">
      <div class="card-body">
        <h5 class="card-title">Name: {{ project.name }}</h5>
        <h6 class="card-subtitle mb-2 text-body-secondary">
          <strong>Link: </strong
          ><a href="{{ project.link }}">{{ project.link }}</a>
        </h6>
        <p class="card-text">
          <strong>Description: </strong>{{ project.description }}
        </p>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped></style>
