import './styles/scss/base.scss';
import Dashboard from './components/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import UserListPage from './pages/UserList/UserListPage';
import UserProfile from './pages/UserProfile/UserProfile';
import { useState } from 'react';

export const App: React.FC = (): JSX.Element => {
  const [filter, setFilter] = useState('');
  return (
    <div className="container">
      <Dashboard setFilter={setFilter} />
      <Routes>
        <Route path="/" element={<UserListPage filter={filter} />} />
        <Route path="/:id" element={<UserProfile />} />
      </Routes>
    </div>
  );
};
