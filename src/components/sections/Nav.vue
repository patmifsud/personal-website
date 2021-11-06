<template>
  <nav>
    <div class="header">
      <h1>Pat Mifsud</h1>
      <h2>Developer and Designer</h2>
    </div>
    <div class="icons flex">
      <Icon title="Toggle Light/ Dark Mode" class="hideon mobile"/>
      <Icon title="Divider" class="hideon mobile"/>
      <Icon title="Open LinkedIn" link="https://www.linkedin.com/in/patmifsud/" />
      <Icon title="Open in Github" link="https://github.com/patmifsud" />
      <Icon title="View Figma design file" class="hideon mobile" link="https://www.figma.com/file/HVMV60R02vSforZNMxw83t/Resume-and-folio-site?node-id=642%3A2349" />
      <Icon title="Email me"
        link="mailto:patmifsud@me.com?subject=re%3A%20Availability&body=Hi%20Pat%2C%0D%0A"
      />
    </div>
  </nav>
</template>

<script>

import Icon from '../subcomponents/Icon.vue';

export default {
  name: 'Nav',
  components: {
    Icon,
  },
};
</script>

<style scoped>
  nav {
    width: 100%;
    max-width: var(--screenWidth);
    padding: var(--sp4);

    position: fixed;

    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;

    margin: 0 auto;
    left: 50%;
    transform: translateX(-50%);
    top:-0.4rem;
  }

  .icons{
    margin-top: -1.6rem;
  }

  h2{
    color: var(--color2);
  }
</style>
