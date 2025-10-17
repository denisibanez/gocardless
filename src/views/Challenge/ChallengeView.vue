<template>
  <q-layout view="lHh Lpr lFf" class="challengeView__wrapper">
    <div class="challange__wrapper--container max-w-[1200px] mx-auto">
      <q-header elevated class="max-w-[1200px] mx-auto">
        <q-toolbar>
          <q-toolbar-title class="flex items-center justify-between">
            <div class="challengeView__logo flex gap-5">
              <img src="@/assets/logo.svg" alt="Logo" class="logo q-mr-sm" width="40" height="40" />
              <span>Challenge</span>
            </div>

            <div class="challengeView__menu">
              <ul class="flex items-center gap-x-14">
                <li v-for="item in menuItems" :key="item.label">
                  <router-link :to="item.to">{{ item.label }}</router-link>
                </li>
              </ul>
            </div>  

            <div class="flex items-center">
              <div class="challengeView__avatar flex items-center gap-2">
                <q-item-section side>
                  <q-item-label class="text-white">Mary</q-item-label>
                  <q-item-label class="text-white">2 new messages</q-item-label>
                </q-item-section>
                <q-avatar>
                  <img src="https://cdn.quasar.dev/img/avatar.png" />
                </q-avatar>
              </div>
            </div>
          </q-toolbar-title>
        </q-toolbar>
      </q-header>

      <q-page-container>
        <q-page class="flex flex-center">
          <div class="text-center">
            <h1>Challenge Page</h1>
            <p>This is a challenge page with Quasar layout components</p>
          </div>

          <div class="row">
            <div class="col">
              <div v-for="show in shows" :key="show">
                 {{  show  }}
              </div>
            </div>
          </div>
        </q-page>
      </q-page-container>
    </div>
  </q-layout>
</template>

<script setup lang="ts">
import { reactive, onMounted } from 'vue';
import { useApiRequest } from '@/composables';
import { challangeService } from '@/services';


interface MenuItem {
  label: string;
  to: string;
}

const { data: shows, execute } = useApiRequest(() => challangeService.getChallange(),
  {
    successMessage: 'Shows fetched successfully',
    errorMessage: 'Failed to fetch shows',
  },
);

const menuItems: MenuItem[] = reactive([
  {
    label: 'Home',
    to: '/',
  },
  {
    label: 'About',
    to: '/about',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
  {
    label: 'Blog',
    to: '/blog',
  },
  {
    label: 'Contact',
    to: '/contact',
  },
]);

onMounted(() => {
  execute();
});

</script>

<style scoped lang="scss">
.challengeView {
  &__wrapper {
    height: 100vh;
    color: #fff;
    background-color: #030406;

    .q-header {
    height: 80px;
    background-color: #030406;

    .logo {
      border-radius: 8px;
    }

    h1 {
      color: #fff;
      margin-bottom: 1rem;
    }

    p {
      color: #ccc;
    }
  }

  .q-toolbar {
    height: 80px;
  }

  .q-page {
    background-color: #030406;
    color: #fff;
  }
}
}
</style>
