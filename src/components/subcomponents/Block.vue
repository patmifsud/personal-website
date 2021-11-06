<template>
  <section :title="title" class="gap4">
    <div class="gap3">
      <hr/>
      <header >
        <h3>{{title}}</h3>
      </header>
    </div>
    <article :class="'gap'+ gap">
      <slot></slot>
    </article>
  </section>
</template>

<script>
export default {
  name: 'Block',
  props: {
    title: String,
    gap: String,
  },
};
</script>

<style scoped>
  aside section{
    width: 100%;
    min-height:25vh;
    padding-bottom:var(--sp7);
  }

  section {
    display: flex;
    flex-direction: column;

    width: 64%;
    padding-bottom:var(--sp5);
    padding-right:var(--colGap);
  }
  hr{
    border-top:solid 1px var(--color2);
  }
</style>
