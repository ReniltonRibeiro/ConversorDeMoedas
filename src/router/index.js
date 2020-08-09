import Vue from 'vue';
import Router from 'vue-router';
import conversor from '@/components/Conversor.vue';

Vue.use(Router);

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Conversor',
      component: conversor,
    },
  ],
});
