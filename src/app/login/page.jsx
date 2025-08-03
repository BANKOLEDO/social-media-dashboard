'use client';

import { useState } from 'react';
import { supabase } from '@/lib/supabaseClient';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  async function handleLogin(e) {
    e.preventDefault();
    setError('');
    const { error } = await supabase.auth.signInWithPassword({ email, password });
    if (error) return setError(error.message);
    window.location.href = '/admin';
  }

  async function handleOAuth(provider) {
    await supabase.auth.signInWithOAuth({ provider });
  }

  return (
    <div className="p-6 max-w-md mx-auto">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <form onSubmit={handleLogin} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          type="email"
          placeholder="Email"
          value={email}
          onChange={e => setEmail(e.target.value)}
          required
        />
        <input
          className="w-full p-2 border rounded"
          type="password"
          placeholder="Password"
          value={password}
          onChange={e => setPassword(e.target.value)}
          required
        />
        {error && <p className="text-red-500">{error}</p>}
        <button className="w-full bg-blue-600 text-white py-2 rounded" type="submit">
          Log in
        </button>
      </form>

      <div className="mt-6 space-y-2">
        <button
          onClick={() => handleOAuth('github')}
          className="w-full bg-gray-800 text-white py-2 rounded"
        >
          Login with GitHub
        </button>
        <button
          onClick={() => handleOAuth('google')}
          className="w-full bg-red-600 text-white py-2 rounded"
        >
          Login with Google
        </button>
      </div>
    </div>
  );
}
