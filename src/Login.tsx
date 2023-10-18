// login.tsx
import React, { useState } from 'react';

interface Props {
    user: { name: string; pwd: string } | null;
    setCurrentUser: (username: string) => void;
}

const Login: React.FC<Props> = ({user, setCurrentUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if (username === user?.name && password === user?.pwd) {
        setCurrentUser(username);
    }
  };

  return (
    <div>
      <h2>Login</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
};

export default Login;
