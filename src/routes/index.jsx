import { lazy } from 'react';
import config from '../config';

// layouts
const HeaderOnly = lazy(() => import('../layouts/HeaderOnly'));

const HomePage = lazy(() => import('../pages/Home'));
const Following = lazy(() => import('../pages/Following'));
const Profile = lazy(() => import('../pages/Profile'));
const Upload = lazy(() => import('../pages/Upload'));
const Search = lazy(() => import('../pages/Search'));
const NotFound = lazy(() => import('../pages/404NotFound'));
// Public routes
const publicRoutes = [
    { id: 1, path: config.route.home, component: HomePage },
    { id: 2, path: config.route.following, component: Following },
    { id: 3, path: config.route.profile, component: Profile },
    { id: 4, path: config.route.upload, component: Upload, layout: HeaderOnly },
    { id: 5, path: config.route.search, component: Search, layout: null },
    { id: 6, path: config.route.NotFound, component: NotFound, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
