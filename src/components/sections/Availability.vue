<template>
  <Block title="Availability" gap="2">

      <div class="flex row">
        <div class="icons">
            <Icon title="Check" />
        </div>
        <p>
          Available now for small projects
        </p>
      </div>

      <div class="flex row">
        <div class="icons">
          <Icon title="Wait" />
        </div>
        <p>
          Available for larger projects or full-time work starting Janurary ‘22
        </p>
      </div>

      <a href="mailto:patmifsud@me.com?subject=re%3A%20Availability&body=Hi%20Pat%2C%0D%0A">
        Contact me
      </a>

    </Block>
</template>

<script>
import Block from '../subcomponents/Block.vue';
import Icon from '../subcomponents/Icon.vue';

export default {
  components: {
    Block,
    Icon,
  },
};
</script>

<style scoped>
  article > div{
    margin-left:-1em;
  }
</style>
