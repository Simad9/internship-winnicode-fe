import { useState } from 'react';
import useLogin from '../hooks/useLogin';
import handleDashboardAdmin from '../hooks/dashAdmin';

const LoginForm = () => {

  const { handleLogin, loading } = useLogin();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const submit = (e) => {
    e.preventDefault();
    handleLogin({ username, password });
  };

  const dasAdmin = () => {
    // handleDashboardAdmin();
    console.log('Dashboard Admin clicked');
    handleDashboardAdmin();
  }

  return (
    <div>
      <form className='flex flex-col' onSubmit={submit}>
        <h1 className='mb-2'>Username</h1>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <h2 className='mb-2'>Password</h2>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className='bg-red-500 hover:bg-red-900' type="submit" disabled={loading}>
          {loading ? 'Logging in...' : 'Login'}
        </button>
      </form>
      <button className='bg-blue-500 mt-4' onClick={dasAdmin}>Dashboard</button>
    </div>
  );
};

export default LoginForm;
