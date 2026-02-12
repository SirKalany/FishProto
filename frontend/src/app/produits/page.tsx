import { Suspense } from 'react';
import ProductsPageClient from './ProductsPageClient';

export default function Page() {
  return (
    <Suspense fallback={<div>Chargement...</div>}>
      <ProductsPageClient />
    </Suspense>
  );
}
