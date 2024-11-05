import { FunctionComponent, ElementType, useEffect, useState } from 'react';
import { Navigate, useLocation } from 'react-router-dom';
import find from 'lodash/find';
import { RouteType, routes } from './routes';

type Props = {
  component: FunctionComponent;
  layout: ElementType;
};

const PrivateRoute = ({ component: Component, layout: Layout }: Props) => {
  const location = useLocation();
  const [user] = useState(localStorage.getItem('user') || '');
  const [isAuth, setIsAuth] = useState(false);

  useEffect(() => {
    validateRoute();
  }, [location]);

  const validateRoute = () => {
    console.log('location ', location.pathname.split('/')[1]);
    const hasAccess = find(
      routes,
      ({ path }: RouteType) =>
        path.split('/')[1] === location.pathname.split('/')[1]
    );
    console.log('hasAccess', hasAccess);
    if (!hasAccess) {
      setIsAuth(false);
      return;
    }

    validateSesionToken();

    setIsAuth(true);
    return true;
  };

  const validateSesionToken = () => {
    const user = localStorage.getItem('user');
    console.log('user ', user);
    if (!user) {
      setIsAuth(false);
      return;
    }
  };

  return (
    <>
      {user ? (
        <>
          <Layout>
            <Component />
          </Layout>
        </>
      ) : (
        <Navigate to="/login" />
      )}
    </>
  );
};

export default PrivateRoute;
