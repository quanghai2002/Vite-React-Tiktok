import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Fragment, useState, createContext } from 'react';

const DefaultLayout = lazy(() => import('./components/Layout/DefaultLayput'));

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
        </div>
    );
}
export { ThemContext };
export default App;
