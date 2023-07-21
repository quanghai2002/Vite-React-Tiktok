import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Fragment, useState, useCallback } from 'react';
import { Switch } from '@mui/material';
import { Label } from '@mui/icons-material';
const DefaultLayout = lazy(() => import('./components/Layout/DefaultLayput'));

import { publicRoutes } from './routes';
function App() {
    const [checked, setChecked] = useState(false);
    const handleChange = useCallback(() => {
        setChecked((prev) => {
            return !prev;
        });
    }, []);

    return (
        <>
            <Switch checked={checked} onChange={handleChange} inputProps={{ 'aria-label': 'controlled' }} />
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
        </>
    );
}

export default App;
