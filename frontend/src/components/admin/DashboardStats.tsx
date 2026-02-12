import { Product, Order } from '@/types';

interface DashboardStatsProps {
  products: Product[];
  orders: Order[];
}

export default function DashboardStats({ products, orders }: DashboardStatsProps) {
  const stats = [
    {
      name: 'Produits actifs',
      value: products.filter(p => p.inStock).length,
      total: products.length,
      icon: '🥩',
      color: 'bg-blue-500',
    },
    {
      name: 'Commandes en attente',
      value: orders.filter(o => o.status === 'pending').length,
      total: orders.length,
      icon: '📦',
      color: 'bg-yellow-500',
    },
    {
      name: 'Commandes du jour',
      value: 0, // À calculer avec les vraies données
      total: orders.length,
      icon: '📅',
      color: 'bg-green-500',
    },
    {
      name: 'Chiffre d\'affaires',
      value: '0 €',
      total: '',
      icon: '💰',
      color: 'bg-primary',
    },
  ];

  return (
    <div>
      <h2 className="text-2xl font-bold text-gray-900 mb-6">Vue d'ensemble</h2>
      
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.name} className="bg-white rounded-lg shadow-md p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-600 mb-1">{stat.name}</p>
                <p className="text-3xl font-bold text-gray-900">
                  {stat.value}
                  {stat.total && <span className="text-sm text-gray-500"> / {stat.total}</span>}
                </p>
              </div>
              <div className={`${stat.color} text-white text-3xl p-3 rounded-lg`}>
                {stat.icon}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow-md p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4">Actions rapides</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <button className="btn-primary flex items-center justify-center">
            <span className="mr-2">➕</span>
            Ajouter un produit
          </button>
          <button className="btn-secondary flex items-center justify-center">
            <span className="mr-2">📊</span>
            Voir les statistiques
          </button>
          <button className="btn-outline flex items-center justify-center">
            <span className="mr-2">📧</span>
            Envoyer une newsletter
          </button>
        </div>
      </div>
    </div>
  );
}