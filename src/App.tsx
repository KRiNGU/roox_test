import './styles/scss/base.scss';
import UserListPage from './pages/UserList/UserListPage';
import Dashboard from './components/Dashboard/Dashboard';

export const App = () => {
  return (
    <div className="container">
      <Dashboard />
      <UserListPage />
    </div>
  );
};
