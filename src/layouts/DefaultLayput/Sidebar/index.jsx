import clsx from 'clsx';
import style from './Sidebar.module.scss';
function Sidebar() {
    return (
        <aside className={clsx(style.wrapper)}>
            <h2>SideBar</h2>
        </aside>
    );
}

export default Sidebar;
