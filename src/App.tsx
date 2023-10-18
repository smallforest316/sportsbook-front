// App.tsx
import React, { useState } from 'react';
import Login from './Login';
import Register from './Register';
import Main from './main';

const App: React.FC = () => {
  const [user, setUser] = useState<{ name: string; pwd: string } | null>(null);
  const [CurrentUser, setCurrentUser] = useState<string | null>(null);
  return (
    <div>
      {CurrentUser ? (
        <>
          <div id='login_bar'>
            <h2>Welcome, {CurrentUser}!</h2>
            <button onClick={() => setCurrentUser(null)}>Logout</button>
          </div>
          <Main />
        </>
      ) : (
        <>
          <Login user={user} setCurrentUser={setCurrentUser} />
          <Register setUser={setUser}/>
        </>
      )}
    </div>
  );
};

export default App;
