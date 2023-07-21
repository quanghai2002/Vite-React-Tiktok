import { lazy } from 'react';

// layouts
const HeaderOnly = lazy(() => import('../components/Layout/HeaderOnly'));

const HomePage = lazy(() => import('../pages/Home'));
const Following = lazy(() => import('../pages/Following'));
const Profile = lazy(() => import('../pages/Profile'));
const Upload = lazy(() => import('../pages/Upload'));
const Search = lazy(() => import('../pages/Search'));
// Public routes
const publicRoutes = [
    { id: 1, path: '/', component: HomePage },
    { id: 2, path: '/following', component: Following },
    { id: 3, path: '/profile', component: Profile },
    { id: 4, path: '/upload', component: Upload, layout: HeaderOnly },
    { id: 4, path: '/search', component: Search, layout: null },
];

// Private routes
const privateRoutes = [];

export { publicRoutes, privateRoutes };
