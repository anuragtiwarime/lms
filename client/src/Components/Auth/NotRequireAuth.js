import { useSelector } from 'react-redux';
import { Navigate, Outlet } from 'react-router-dom';

const NotRequireAuth = () => {
  const { isLoggedIn } = useSelector((state) => state.auth);
  return !isLoggedIn ? <Outlet /> : <Navigate to={'/'} replace />;
};

export default NotRequireAuth;
