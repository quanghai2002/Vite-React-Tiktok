import { lazy } from 'react';
const Header = lazy(() => import('../components/Header'));

function HeaderOnly({ children }) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
        </div>
    );
}
export default HeaderOnly;
