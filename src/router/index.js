import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/about',
      name: 'about',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/external',
      name: 'external',
      redirect: '/github/YourBrainEatsYou/vue-apps-redirect' // 👈  prefixed routes link to github
    },

    // ✨ the  magic happens here
    {
      path: '/github/:pathMatch(.*)*', // 👈  catch all github routes
      name: 'redirectToGithub',

      beforeEnter: (to) => {
        const path = Array.isArray(to.params.pathMatch)
          ? to.params.pathMatch.join('/')
          : to.params.pathMatch;

        // redirect to ninja v2
        window.location.href = new URL(`/${path}`, 'https://github.com/').href;

        return false;
      },
    },
  ]
})

export default router
