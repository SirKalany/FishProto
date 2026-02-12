import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Nettoyer la base
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();

  // Ajouter des produits
  await prisma.product.createMany({
    data: [
      {
        name: 'Côte de bœuf',
        description: 'Côte de bœuf maturée 28 jours',
        price: 28.50,
        category: 'Bœuf',
        inStock: true
      },
      {
        name: 'Entrecôte',
        description: 'Entrecôte de bœuf tendre',
        price: 22.90,
        category: 'Bœuf',
        inStock: true
      },
      {
        name: 'Côtelettes de porc',
        description: 'Côtelettes de porc fermier',
        price: 12.50,
        category: 'Porc',
        inStock: true
      },
      {
        name: 'Poulet fermier',
        description: 'Poulet élevé en plein air',
        price: 15.90,
        category: 'Volaille',
        inStock: true
      }
    ]
  });

  console.log('Données de test ajoutées !');
}

main()
  .catch((e) => {
    console.error(e);
    // @ts-ignore
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });