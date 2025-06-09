'use client';
import { useUser } from '@/lib/auth-context';

export default function AdminPage() {
  const { user } = useUser();

  if (!user || !user.is_admin) return <p>Acesso negado.</p>;

  return (
    <div className="p-4">
      <h1 className="text-xl font-bold mb-4">Painel do Admin</h1>
      <p>Área restrita para envio de bilhetes.</p>
    </div>
  );
}
