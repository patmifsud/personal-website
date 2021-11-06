<template>
  <div class="gap3">
    <h3>{{ data.name }}</h3>

    <div class="project-desc gap3">
      <div class="gap2">
        <p v-html="data.desc[0]"></p>
        <!-- <p v-if="data.desc[1]" class="hideon medium mobile" v-html="data.desc[1]"></p> -->
      </div>

      <div class="icons flex">
        <a title="Open website in a new tab" :href="data.urls.web">
          Visit Site
        </a>
        <Icon v-if="data.urls.github" title="Open in Github" :link="data.urls.github" />
        <Icon v-if="data.urls.figma" title="View Figma design file" :link="data.urls.figma" />
      </div>
    </div>
  </div>

</template>

<script>
import Icon from './Icon.vue';

export default {
  name: 'Project',
  components: {
    Icon,
  },
  props: {
    data: Object,
  },
};
</script>

<style>

.project .icons a{
    margin-bottom: -4px;
    margin-right:var(--sp3);
  }
.project p{
  max-width: var(--sp10);
}
.project ul{
  padding-left: var(--sp2);
  padding-top: var(--sp0);
}
.project li{
  margin-bottom: var(--sp1);
}
.project .icons{
  align-items: center;
}

</style>
