import './styles/scss/base.scss';
// import UserListPage from './pages/UserList/UserListPage';
import Dashboard from './components/Dashboard/Dashboard';
import UserProfile from './pages/UserProfile/UserProfile';

export const App = () => {
  return (
    <div className="container">
      <Dashboard />
      <UserProfile id={1} />
    </div>
  );
};
