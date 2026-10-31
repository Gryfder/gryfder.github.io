import type { Component } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import { FEATURE_HOME_V2 } from './feature-flag';

export interface NavigationModel {
  readonly id: string;
  readonly path: string;
  readonly component: () => Component;
}

export const HOME: NavigationModel = {
  id: 'home',
  path: '/',
  component: () =>
    FEATURE_HOME_V2
      ? import('@/pages/home-v2/Home-v2.page.vue')
      : import('@/pages/home/Home.page.vue'),
};

export const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    { path: HOME.path, name: HOME.id, component: HOME.component },
    { path: '/:pathMatch(.*)*', redirect: { name: 'home' } },
  ],
});
