import { Router } from 'express';
import prisma from '../lib/prisma.js';

const router = Router();

// GET tous les produits
router.get('/', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: { inStock: true },
      orderBy: { category: 'asc' }
    });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des produits' });
  }
});

// GET produits par catégorie
router.get('/category/:category', async (req, res) => {
  try {
    const products = await prisma.product.findMany({
      where: { 
        category: req.params.category,
        inStock: true 
      }
    });
    res.json(products);
  } catch (error) {
    console.error('Error fetching products by category:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération des produits' });
  }
});

// GET produit par ID
router.get('/:id', async (req, res) => {
  try {
    const product = await prisma.product.findUnique({
      where: { id: parseInt(req.params.id) }
    });
    if (!product) {
      return res.status(404).json({ error: 'Produit non trouvé' });
    }
    res.json(product);
  } catch (error) {
    console.error('Error fetching product:', error);
    res.status(500).json({ error: 'Erreur lors de la récupération du produit' });
  }
});

export default router;