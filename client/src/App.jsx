import { Route, Routes } from 'react-router-dom';
import AuthPage from './pages/AuthPage';
import DashboardPage from './pages/DashboardPage';
import ProtectedRoutes from './components/protected-routes/protected-routes';
import Dashboard from './components/dashboard/dashboard';

function App() {
    return (
        <Routes>
            <Route path="/" element={<AuthPage />} />
            <Route element={<ProtectedRoutes />}>
                <Route element={<DashboardPage />}>
                    <Route path="/dashboard" element={<Dashboard />} />
                </Route>
            </Route>
        </Routes>
    );
}

export default App;
