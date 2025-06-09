'use client';
import { supabase } from '@/lib/supabase';

export default function LoginPage() {
  const handleLogin = async () => {
    await supabase.auth.signInWithOAuth({ provider: 'google' });
  };

  return (
    <div className="p-6 text-center">
      <h2 className="text-2xl mb-4">Entrar com Google</h2>
      <button onClick={handleLogin} className="bg-green-600 text-white px-4 py-2 rounded">Entrar</button>
    </div>
  );
}
