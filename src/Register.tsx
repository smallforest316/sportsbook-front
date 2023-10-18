// Register.tsx
import React, { useState } from 'react';

interface Props {
    setUser: ( data: {name: string, pwd: string} ) => void;
}

const Register: React.FC<Props> = ({setUser}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleRegister = () => {
    setUser({name: username, pwd: password});
  };

  return (
    <div>
      <h2>Register</h2>
      <input type="text" placeholder="Username" value={username} onChange={(e) => setUsername(e.target.value)} />
      <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
      <button onClick={handleRegister}>Register</button>
    </div>
  );
};

export default Register;
