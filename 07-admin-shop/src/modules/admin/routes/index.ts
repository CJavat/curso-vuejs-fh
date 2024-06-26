import type { RouteRecordRaw } from 'vue-router';
import isAdminGuard from '@/modules/auth/guards/is-admin.guard';
import isAuthenticatedGuard from '@/modules/auth/guards/is-authenticated.guard';

export const adminRoutes: RouteRecordRaw = {
  path: '/admin',
  name: 'admin',
  beforeEnter: [isAuthenticatedGuard, isAdminGuard],
  component: () => import('@/modules/admin/layouts/AdminLayout.vue'),
  // children: [
  //   {
  //     path: 'products',
  //     name: 'products',
  //     component: () => import('@/modules/admin/views/ProductsView.vue'),
  //   },
  //   {
  //     path: 'orders',
  //     name: 'orders',
  //     component: () => import('@/modules/admin/views/OrdersView.vue'),
  //   },
  //   {
  //     path: 'users',
  //     name: 'users',
  //     component: () => import('@/modules/admin/views/UsersView.vue'),
  //   },
  // ],
};
