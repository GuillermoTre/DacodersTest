import { BrowserRouter, Route, Routes } from 'react-router-dom';
import PrivateRoute from './permissions/PrivateRoute';
import DashboardLayout from '../layout/DashboardLayout';
import Login from '../screens/login';
import Dashboard from '../screens/dashboard';
import Search from '../screens/search';
import Upload from '../screens/Upload';
import AskAi from '../screens/askAi';

function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/Login" element={<Login />} />
        <Route
          path="/Dashboard"
          element={
            <PrivateRoute layout={DashboardLayout} component={Dashboard} />
          }
        />
        <Route
          path="/search"
          element={<PrivateRoute layout={DashboardLayout} component={Search} />}
        />
        <Route
          path="/add"
          element={<PrivateRoute layout={DashboardLayout} component={Upload} />}
        />
        <Route
          path="/askAi"
          element={<PrivateRoute layout={DashboardLayout} component={AskAi} />}
        />
        <Route path="*" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
}

export default Router;
