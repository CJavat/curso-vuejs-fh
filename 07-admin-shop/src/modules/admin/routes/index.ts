import type { RouteRecordRaw } from 'vue-router';
import isAdminGuard from '@/modules/auth/guards/is-admin.guard';
import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';

export const adminRoutes: RouteRecordRaw = {
  path: '/admin',
  name: 'admin',
  beforeEnter: [isAuthenticatedGuard, isAdminGuard],
  redirect: { name: 'admin-dashboard' },
  component: () => import('@/modules/admin/layouts/AdminLayout.vue'),
  children: [
    {
      path: 'dashboard',
      name: 'admin-dashboard',
      component: () => import('@/modules/admin/views/DashboardView.vue'),
    },
    {
      path: 'products',
      name: 'admin-products',
      component: () => import('@/modules/admin/views/ProductsView.vue'),
    },
    {
      path: 'product/:productId',
      name: 'admin-product',
      props: true, //? Funciona para que el parametro (productId) pueda ser tomado en las props de la ruta.
      component: () => import('@/modules/admin/views/ProductView.vue'),
    },
  ],
};
