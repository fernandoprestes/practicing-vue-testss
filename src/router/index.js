import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../pages/Home/index.vue');
const PriceOfLand = () => import('../components/PriceOfLand.vue');
const AreaPerimeterAndDiagonal = () => import('../components/AreaPerimeterAndDiagonal.vue');
const AverageBetweenAges = () => import('../components/AverageBetweenAges.vue');

export const routes = [
  {
    path: '/',
    component: Home,
    children: [
      {
        path: '/price-of-land',
        component: PriceOfLand,
      },
      {
        path: '/area-perimeter-and-diagonal',
        component: AreaPerimeterAndDiagonal,
      },
      {
        path: '/average-between-ages',
        component: AverageBetweenAges,
      },
    ],
  },

  {
    path: '/:pathMatch(.*)*',
    redirect: { name: 'Home' },
  },
];

const router = createRouter({
  history: createWebHistory('/'),
  routes,
});

export default router;
