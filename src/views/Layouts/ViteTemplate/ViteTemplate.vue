<script setup lang="ts">
import { RouterLink, RouterView } from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
</script>

<template>
  <div class="vite-template">
    <header>
      <img alt="Vue logo" class="logo" src="@/assets/logo.svg" width="125" height="125" />

      <div class="wrapper">
        <HelloWorld msg="You did it!" />

        <nav>
          <RouterLink to="/">Home</RouterLink>
          <RouterLink to="/pokemon">Pokemon</RouterLink>
          <RouterLink to="/pinia">Pinia</RouterLink>
          <RouterLink to="/tailwind-test">Tailwind</RouterLink>
          <RouterLink to="/quasar">Quasar</RouterLink>
          <RouterLink to="/quasar-tailwind">Q+TW</RouterLink>
          <RouterLink to="/about">About</RouterLink>
        </nav>
      </div>
    </header>

    <RouterView />
  </div>
</template>

<!-- CSS Variables - Not scoped to avoid issues with :root variables -->
<style lang="scss">
@use '../../../assets/base.css';
</style>

<!-- Component Styles - Scoped to this component only -->
<style scoped lang="scss">
.vite-template {
  margin: 0 auto;
  padding: 2rem;
  font-weight: normal;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  align-items: center;
  min-height: 100vh;
  color: var(--color-text);
  background: var(--color-background);
  transition:
    color 0.5s,
    background-color 0.5s;
  line-height: 1.6;
  font-family:
    Inter,
    -apple-system,
    BlinkMacSystemFont,
    'Segoe UI',
    Roboto,
    Oxygen,
    Ubuntu,
    Cantarell,
    'Fira Sans',
    'Droid Sans',
    'Helvetica Neue',
    sans-serif;
  font-size: 15px;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a,
.green {
  text-decoration: none;
  color: hsla(160, 100%, 37%, 1);
  transition: 0.4s;
  padding: 3px;
}

@media (hover: hover) {
  a:hover {
    background-color: hsla(160, 100%, 37%, 0.2);
  }
}

header {
  line-height: 1.5;
  max-height: 100vh;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

nav {
  width: 100%;
  font-size: 12px;
  text-align: center;
  margin-top: 2rem;

  a.router-link-exact-active {
    color: var(--color-text);

    &:hover {
      background-color: transparent;
    }
  }

  a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);

    &:first-of-type {
      border: 0;
    }
  }
}

@media (min-width: 1024px) {
  .vite-template {
    display: grid;
    grid-template-columns: 1fr 1fr;
    padding: 0 2rem;
  }

  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);

    .logo {
      margin: 0 2rem 0 0;
    }

    .wrapper {
      display: flex;
      place-items: flex-start;
      flex-wrap: wrap;
    }
  }

  nav {
    text-align: left;
    margin-left: -1rem;
    font-size: 1rem;
    padding: 1rem 0;
    margin-top: 1rem;
  }
}
</style>
