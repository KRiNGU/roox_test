import '../../styles/scss/base.scss';
import styles from './App.module.scss';
import Dashboard from '../../components/Dashboard/Dashboard';
import { Route, Routes } from 'react-router-dom';
import UserListPage from '../UserList/UserListPage';
import UserProfile from '../UserProfile/UserProfile';
import { useState } from 'react';

const App: React.FC = (): JSX.Element => {
  const [filter, setFilter] = useState('');
  return (
    <div className={styles.container}>
      <Dashboard setFilter={setFilter} />
      <main className={styles.main}>
        <Routes>
          <Route path="/" element={<UserListPage filter={filter} />} />
          <Route path="/:id" element={<UserProfile />} />
        </Routes>
      </main>
    </div>
  );
};

export default App;
