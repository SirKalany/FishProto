import { PrismaClient } from '@prisma/client';

const prisma = new PrismaClient();

async function main() {
  // Nettoyer la base
  await prisma.orderItem.deleteMany();
  await prisma.order.deleteMany();
  await prisma.product.deleteMany();

  // Ajouter des produits de poissonnerie
  await prisma.product.createMany({
    data: [
      // === POISSONS ===
      {
        name: 'Saumon frais',
        description: 'Saumon de Norvège, pêche durable (filet)',
        price: 24.90,
        category: 'Poissons',
        inStock: true
      },
      {
        name: 'Dorade royale',
        description: 'Dorade royale de Méditerranée (pièce)',
        price: 18.50,
        category: 'Poissons',
        inStock: true
      },
      {
        name: 'Bar de ligne',
        description: 'Bar sauvage pêché à la ligne (pièce)',
        price: 32.00,
        category: 'Poissons',
        inStock: true
      },
      {
        name: 'Cabillaud',
        description: 'Cabillaud frais de l\'Atlantique (filet)',
        price: 19.90,
        category: 'Poissons',
        inStock: true
      },
      {
        name: 'Sole',
        description: 'Sole fraîche de nos côtes (pièce)',
        price: 28.50,
        category: 'Poissons',
        inStock: true
      },
      {
        name: 'Thon rouge',
        description: 'Thon rouge en darnes (pêche responsable)',
        price: 35.00,
        category: 'Poissons',
        inStock: true
      },
      {
        name: 'Lieu noir',
        description: 'Lieu noir frais (filet)',
        price: 14.90,
        category: 'Poissons',
        inStock: true
      },
      {
        name: 'Saint-Pierre',
        description: 'Saint-Pierre de nos côtes (pièce)',
        price: 29.90,
        category: 'Poissons',
        inStock: true
      },

      // === CRUSTACÉS ===
      {
        name: 'Homard breton',
        description: 'Homard vivant de Bretagne (pièce 500-600g)',
        price: 42.00,
        category: 'Crustacés',
        inStock: true
      },
      {
        name: 'Langoustines',
        description: 'Langoustines fraîches de nos côtes (la barquette 500g)',
        price: 28.90,
        category: 'Crustacés',
        inStock: true
      },
      {
        name: 'Tourteau',
        description: 'Tourteau cuit prêt à déguster (pièce)',
        price: 16.50,
        category: 'Crustacés',
        inStock: true
      },
      {
        name: 'Araignée de mer',
        description: 'Araignée de mer de Bretagne cuite (pièce)',
        price: 19.90,
        category: 'Crustacés',
        inStock: true
      },
      {
        name: 'Crevettes roses',
        description: 'Crevettes roses cuites (la barquette 250g)',
        price: 12.50,
        category: 'Crustacés',
        inStock: true
      },
      {
        name: 'Bulots',
        description: 'Bulots cuits au court-bouillon (500g)',
        price: 8.90,
        category: 'Crustacés',
        inStock: true
      },

      // === COQUILLAGES ===
      {
        name: 'Huîtres creuses n°3',
        description: 'Huîtres de Marennes-Oléron (la douzaine)',
        price: 15.90,
        category: 'Coquillages',
        inStock: true
      },
      {
        name: 'Huîtres fines de claire',
        description: 'Huîtres fines de claire affinage 1 mois (la douzaine)',
        price: 22.50,
        category: 'Coquillages',
        inStock: true
      },
      {
        name: 'Moules de bouchot',
        description: 'Moules de bouchot AOP (2kg)',
        price: 6.90,
        category: 'Coquillages',
        inStock: true
      },
      {
        name: 'Palourdes',
        description: 'Palourdes grises fraîches (500g)',
        price: 9.50,
        category: 'Coquillages',
        inStock: true
      },
      {
        name: 'Coques',
        description: 'Coques fraîches de nos côtes (500g)',
        price: 7.90,
        category: 'Coquillages',
        inStock: true
      },
      {
        name: 'Saint-Jacques',
        description: 'Noix de Saint-Jacques fraîches (la barquette 250g)',
        price: 24.90,
        category: 'Coquillages',
        inStock: true
      },
      {
        name: 'Praires',
        description: 'Praires fraîches de Bretagne (500g)',
        price: 11.90,
        category: 'Coquillages',
        inStock: true
      },
      {
        name: 'Amandes de mer',
        description: 'Amandes de mer fraîches (500g)',
        price: 8.50,
        category: 'Coquillages',
        inStock: true
      },
    ]
  });

  console.log('✅ 24 produits de poissonnerie ajoutés avec succès !');
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