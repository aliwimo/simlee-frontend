import { createRouter, createWebHistory } from 'vue-router';
import { useAuthStore } from '@/stores/authStore.ts';

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('@/views/HomeView.vue'),
    },
    {
      path: '/teams',
      name: 'teams',
      component: () => import('@/views/TeamsView.vue'),
    },
    {
      path: '/leagues',
      name: 'leagues',
      component: () => import('@/views/leagues/IndexView.vue'),
    },
    {
      path: '/leagues/:id',
      name: 'league',
      component: () => import('@/views/leagues/ShowView.vue'),
    }
  ],
});

router.beforeEach((to, from, next) => {
  const authStore = useAuthStore();
  if (to.meta.requiresAuth && !authStore.isAuthenticated) {
    next('/');
  } else {
    next();
  }
});

export default router;
