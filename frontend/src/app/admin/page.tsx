'use client';

import { useState, useEffect } from 'react';
import { productApi, orderApi } from '@/lib/api';
import { Product, Order } from '@/types';
import toast from 'react-hot-toast';
import ProductManagement from '@/components/admin/ProductManagement';
import OrderManagement from '@/components/admin/OrderManagement';
import DashboardStats from '@/components/admin/DashboardStats';

export default function AdminPage() {
  const [activeTab, setActiveTab] = useState<'dashboard' | 'products' | 'orders'>('dashboard');
  const [products, setProducts] = useState<Product[]>([]);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const productsData = await productApi.getAll();
      setProducts(productsData);
      // Les commandes nécessiteraient une route API backend supplémentaire
      // Pour l'instant on simule avec un tableau vide
      setOrders([]);
    } catch (error) {
      toast.error('Erreur lors du chargement des données');
      console.error('Error loading admin data:', error);
    } finally {
      setLoading(false);
    }
  };

  const tabs = [
    { id: 'dashboard', name: 'Tableau de bord', icon: '📊' },
    { id: 'products', name: 'Produits', icon: '🥩' },
    { id: 'orders', name: 'Commandes', icon: '📦' },
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Admin */}
      <div className="bg-primary text-white shadow-lg">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold">Panneau d'administration</h1>
              <p className="text-gray-200 mt-1">Gestion de la boucherie</p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm">👤 Admin</span>
              <button className="bg-white text-primary px-4 py-2 rounded-lg font-semibold hover:bg-gray-100 transition">
                Déconnexion
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Tabs Navigation */}
      <div className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="flex space-x-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`py-4 px-2 border-b-2 font-medium text-sm transition ${
                  activeTab === tab.id
                    ? 'border-primary text-primary'
                    : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                }`}
              >
                <span className="mr-2">{tab.icon}</span>
                {tab.name}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {loading ? (
          <div className="flex justify-center items-center h-64">
            <div className="animate-spin rounded-full h-12 w-12 border-b-4 border-primary"></div>
          </div>
        ) : (
          <>
            {activeTab === 'dashboard' && (
              <DashboardStats products={products} orders={orders} />
            )}
            {activeTab === 'products' && (
              <ProductManagement products={products} onUpdate={loadData} />
            )}
            {activeTab === 'orders' && (
              <OrderManagement orders={orders} onUpdate={loadData} />
            )}
          </>
        )}
      </div>
    </div>
  );
}