import { createRouter, createWebHistory } from 'vue-router';

const Home = () => import('../pages/Home/index.vue');
const PriceOfLand = () => import('../components/PriceOfLand.vue');
const AreaPerimeterAndDiagonal = () => import('../components/AreaPerimeterAndDiagonal.vue');
const AverageBetweenAges = () => import('../components/AverageBetweenAges.vue');
const GroceryCashier = () => import('../components/GroceryCashier.vue');

export const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
    children: [
      {
        path: '/price-of-land',
        name: 'PriceOfLand',
        component: PriceOfLand,
      },
      {
        path: '/area-perimeter-and-diagonal',
        name: 'AreaPerimeterAndDiagonal',
        component: AreaPerimeterAndDiagonal,
      },
      {
        path: '/average-between-ages',
        name: 'AverageBetweenAges',
        component: AverageBetweenAges,
      },
      {
        path: '/grocery-cashier',
        name: 'GroceryCashier',
        component: GroceryCashier,
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
