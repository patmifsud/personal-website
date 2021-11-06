<template>
  <Nav />
  <div class="container">
    <aside>
      <About class="hideon mobile"/>
      <Availability />
      <Resume />
    </aside>
    <main>
      <About class="hideon desktop"/>
      <Projects />
    </main>
  </div>
</template>

<script>
import './assets/global.css';
import Nav from './components/sections/Nav.vue';
import About from './components/sections/About.vue';
import Availability from './components/sections/Availability.vue';
import Resume from './components/sections/Resume.vue';
import Projects from './components/sections/Projects.vue';

export default {
  name: 'App',
  components: {
    Nav,
    About,
    Availability,
    Resume,
    Projects,
  },
};
</script>

<style>
.container{
  position: relative;
  display: flex;
  flex-wrap: nowrap;

  background: var(--colorBg);
  transition:var(--bgColorTransition);

  z-index: 5;

  max-width: var(--screenWidth);
  margin: 0 auto;
  top: var(--sp10);
  padding: 0 var(--sp4);
}

section{
  width:100%;
}

aside{
  max-width:25%;
  width: 100%;
}
aside p{
  max-width:var(--sp9);
}

main{
  width:100%;
}

@media screen and (min-width: 700px){
  aside{
    margin-right:var(--sp6);
  }
}
</style>
