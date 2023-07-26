import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Fragment, useState, createContext, Suspense } from 'react';

const DefaultLayout = lazy(() => import('./layouts/DefaultLayput'));
const Loader = lazy(() => import('../src/pages/Loading'));

const ThemContext = createContext();
import { publicRoutes } from './routes';
function App() {
    const [theme, setTheme] = useState(false);
    // const handleChange = useCallback(() => {
    //     setChecked((prev) => {
    //         return !prev;
    //     });
    // }, []);

    return (
        <div className={theme ? 'dark' : ''}>
            <Suspense fallback={<Loader />}>
                <ThemContext.Provider value={[theme, setTheme]}>
                    <BrowserRouter>
                        <div className="App">
                            <Routes>
                                {publicRoutes.map((route) => {
                                    let Layout = DefaultLayout;

                                    if (route.layout) {
                                        Layout = route.layout;
                                    } else if (route.layout === null) {
                                        Layout = Fragment;
                                    }

                                    const Page = route.component;
                                    return (
                                        <Route
                                            key={route.id}
                                            path={route.path}
                                            element={
                                                <Layout>
                                                    <Page />
                                                </Layout>
                                            }
                                        />
                                    );
                                })}
                            </Routes>
                        </div>
                    </BrowserRouter>
                </ThemContext.Provider>
            </Suspense>
        </div>
    );
}
export { ThemContext };
export default App;
