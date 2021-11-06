<template>
  <i
    :title="title"
    :class="visited"
    @click="openIconLink()"
  > </i>
</template>

<script>
export default {
  props: {
    title: String,
    link: String,
  },
  data() {
    return {
      visited: '',
    };
  },
  methods: {
    openIconLink() {
      switch (this.title) {
        case 'Toggle Light/ Dark Mode':
          document.body.classList.toggle('darkmode');
          break;
        case 'Divider':
          break;
        default:
          this.visited = 'visited';
          window.open(this.link);
      }
    },
  },
};
</script>

<style scoped>

  i{
    padding: var(--sp3);
    min-width:42px;
    min-height:42px;

    cursor: pointer;

    background: none no-repeat center ;
    background-size: 42%;

    border: 1px solid;
    border-color: #ffffff00;
  }

  i:active{
    opacity: 0.6;
    background-color: var(--color3);
  }
  i:hover{
    border-color: var(--color3);
    border-radius: 3px;
  }
  i.visited{
    border-bottom: solid 1px var(--color3);
  }
  .darkmode i{
    filter: brightness(2);
  }

/* ICONS */
  /* LINKS / INTERACTIVE ------------------------ */
  /* linkedin */
  i[title="Open LinkedIn"]{
    background-image: url("~@/assets/icons/linkedin.svg");}
  i[title="Open LinkedIn"]:hover{
    background-image: url("~@/assets/icons/hover/hoverlinkedin.svg");
  }

  /* figma */
  i[title="View Figma design file"]{
    background-image: url("~@/assets/icons/figma.svg");}
  i[title="View Figma design file"]:hover{
    background-image: url("~@/assets/icons/hover/hoverfigma.svg");
  }

  /* email */
  i[title="Email me"]{
    background-image: url("~@/assets/icons/email.svg");}
  i[title="Email me"]:hover{
    background-image: url("~@/assets/icons/hover/hoveremail.svg");
  }

  /* github */
  i[title="Open in Github"]{
    background-image: url("~@/assets/icons/github.svg");}
  i[title="Open in Github"]:hover{
    background-image: url("~@/assets/icons/hover/hovergithub.svg");
  }

  /* lightmode */
  [title="Toggle Light/ Dark Mode"]{
    background-image: url("~@/assets/icons/dark.svg");}
  [title="Toggle Light/ Dark Mode"]:hover{
    background-image: url("~@/assets/icons/hover/hoverdark.svg");
  }

  /* darkmode */
  .darkmode [title="Toggle Light/ Dark Mode"]{
    background-image: url("~@/assets/icons/light.svg");}
  .darkmode [title="Toggle Light/ Dark Mode"]:hover{
    background-image: url("~@/assets/icons/hover/hoverlight.svg");
  }

  /* ILLUSTRATIVE ------------------------ */
  /* Divider */
  i[title="Divider"]{
    background-image: url("~@/assets/icons/divider.svg");
    cursor:auto;
    border-color: #ffffff00;
  }
  /* Check/tick */
  i[title="Check"]{
    background-image: url("~@/assets/icons/check.svg");
    cursor:auto;
    border-color: #ffffff00;
  }
  /* Wait */
  i[title="Wait"]{
    background-image: url("~@/assets/icons/wait.svg");
    cursor:auto;
    border-color: #ffffff00;
  }
  /* Cross/no */
  i[title="Cross"]{
    background-image: url("~@/assets/icons/cross.svg");
    cursor:auto;
    border-color: #ffffff00;
  }

</style>
