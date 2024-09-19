import { Outlet } from 'react-router-dom';
import SidePanel from '../components/side-panel/side-panel';

const DashboardPage = () => {
    return (
        <div className="flex min-h-screen flex-col">
            <div className="flex flex-1">
                <aside>
                    <SidePanel />
                </aside>
                <main className="min-h-screen flex-1 p-4">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default DashboardPage;
