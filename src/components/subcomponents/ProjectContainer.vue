<template>
  <div class="project flex">

    <div class="project-preview">
      <div class="menu-bar"></div>
      <div
        :class="'project-image ' + data.id"
      ></div>
    </div>

    <ProjectDesc :data="data"/>

  </div>
</template>

<script>

import ProjectDesc from './ProjectDesc.vue';

export default {
  name: 'Project',
  components: {
    ProjectDesc,
  },
  props: {
    data: Object,
  },
};
</script>

<style scoped >

  .project{
    padding-bottom:var(--sp5);
    border-bottom:solid 1px #eeeeee00;
    width:100%;
  }

  /* -------- */
  /* image */
  .project-preview{
    display: flex;
    flex-direction: column;

    border:solid 1px var(--color2);
    border-radius: 3px;

    width:var(--sp8);
    height:var(--sp7);

    margin-right:var(--sp5);
  }

  .project-image{
    background-image:attr(data-bg);
    background-size: cover;
    height: 100%;
  }

   .menu-bar{
    height: var(--sp2);
    border-bottom: solid 1px var(--color3);
    width: 100%;
    background: var(--colorBg);
  }

  .thiswebsite{
    background-image: url("~@/assets/img/projects/twse.png")}
  .sentencing{
    background-image: url("~@/assets/img/projects/sentencing.png")}
  .faraday{
    background-image: url("~@/assets/img/projects/faraday.png")}
  .prospector{
    background-image: url("~@/assets/img/projects/static.gif")}
  .thiswebsite{
    background-image: url("~@/assets/img/projects/twse.png")}
  .thiswebsite{
    background-image: url("~@/assets/img/projects/twse.png")}

</style>
