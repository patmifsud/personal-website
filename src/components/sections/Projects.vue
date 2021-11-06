<template>
  <Block title="Projects" gap="4">
    <template v-for="project in projects" :key="project.id">
      <Project v-if="project.live == true" :data="project" > </Project>
    </template>
  </Block>
</template>

<script>
import Block from '../subcomponents/Block.vue';
import Project from '../subcomponents/ProjectContainer.vue';
import projectData from '../json/projectData.json';
// import Icon from './subcomponents/Icon.vue';

export default {
  components: {
    Block,
    // Icon,
    Project,
  },
  data() {
    return {
      projects: projectData,
    };
  },
};
</script>

<style scoped>
section {
  width: 100%;
}
</style>
