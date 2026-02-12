import { Order } from '@/types';

interface OrderManagementProps {
  orders: Order[];
  onUpdate: () => void;
}

export default function OrderManagement({ orders, onUpdate }: OrderManagementProps) {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'pending':
        return 'bg-yellow-100 text-yellow-800';
      case 'confirmed':
        return 'bg-blue-100 text-blue-800';
      case 'ready':
        return 'bg-green-100 text-green-800';
      case 'completed':
        return 'bg-gray-100 text-gray-800';
      default:
        return 'bg-gray-100 text-gray-800';
    }
  };

  const getStatusLabel = (status: string) => {
    switch (status) {
      case 'pending':
        return 'En attente';
      case 'confirmed':
        return 'Confirmée';
      case 'ready':
        return 'Prête';
      case 'completed':
        return 'Terminée';
      default:
        return status;
    }
  };

  return (
    <div>
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-900">Gestion des commandes</h2>
        <div className="flex space-x-2">
          <select className="input-field">
            <option>Toutes les commandes</option>
            <option>En attente</option>
            <option>Confirmées</option>
            <option>Prêtes</option>
            <option>Terminées</option>
          </select>
        </div>
      </div>

      {orders.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12 text-center">
          <div className="text-6xl mb-4">📦</div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            Aucune commande
          </h3>
          <p className="text-gray-600">
            Les nouvelles commandes apparaîtront ici
          </p>
        </div>
      ) : (
        <div className="space-y-4">
          {orders.map((order) => (
            <div key={order.id} className="bg-white rounded-lg shadow-md p-6">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-lg font-bold text-gray-900">
                    Commande #{order.id}
                  </h3>
                  <p className="text-sm text-gray-600">
                    {order.customerName} - {order.customerEmail}
                  </p>
                  <p className="text-sm text-gray-600">{order.customerPhone}</p>
                </div>
                <div className="text-right">
                  <span className={`px-3 py-1 rounded-full text-sm font-semibold ${getStatusColor(order.status)}`}>
                    {getStatusLabel(order.status)}
                  </span>
                  <p className="text-sm text-gray-600 mt-2">
                    {new Date(order.createdAt).toLocaleDateString('fr-FR')}
                  </p>
                </div>
              </div>

              <div className="border-t pt-4">
                <h4 className="font-semibold mb-2">Articles :</h4>
                <ul className="space-y-1">
                  {order.orderItems.map((item) => (
                    <li key={item.id} className="text-sm text-gray-600">
                      {item.quantity}x {item.product.name} - {Number(item.price).toFixed(2)} €
                    </li>
                  ))}
                </ul>
                {order.notes && (
                  <div className="mt-3">
                    <p className="text-sm font-semibold">Notes :</p>
                    <p className="text-sm text-gray-600">{order.notes}</p>
                  </div>
                )}
              </div>

              <div className="border-t mt-4 pt-4 flex justify-between items-center">
                <div className="text-lg font-bold">
                  Total: {Number(order.totalAmount).toFixed(2)} €
                </div>
                <div className="flex space-x-2">
                  <button className="btn-outline text-sm py-2">
                    Voir détails
                  </button>
                  <button className="btn-primary text-sm py-2">
                    Changer statut
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}