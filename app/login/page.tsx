'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Authenticate user (e.g., using API)
    // Redirect to dashboard on successful login
    router.push('/dashboard');
  };

  return (
    <div style = {{
      display:"flex",
      justifyContent:"center",
      alignItems:"center",
      height:100,
      marginTop:100
    }}>
      
    <form  onSubmit={handleSubmit}>
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        id="email"
        type="email"
        name="email"
        placeholder="Enter your email address"
        required
      />
      <br />
      <input
        className="peer block w-full rounded-md border border-gray-200 py-[9px] pl-10 text-sm outline-2 placeholder:text-gray-500"
        id="password"
        type="password"
        name="password"
        placeholder="Enter your password"
        required
      />
      <br />
      <button style = {{color: 'red'}} type="submit">Login</button>
    </form>
    </div>
  );
};

export default Login;
