import { Router } from 'express';
import prisma from '../lib/prisma.js';

const router = Router();

// POST nouvelle commande
router.post('/', async (req, res) => {
  try {
    const { customerName, customerEmail, customerPhone, items, notes } = req.body;

    const order = await prisma.order.create({
      data: {
        customerName,
        customerEmail,
        customerPhone,
        notes,
        totalAmount: 0,
        orderItems: {
          create: items.map((item: any) => ({
            productId: item.productId,
            quantity: item.quantity,
            price: item.price
          }))
        }
      },
      include: {
        orderItems: {
          include: {
            product: true
          }
        }
      }
    });

    // Calculer le total
    const totalAmount = order.orderItems.reduce(
      (sum, item) => sum + Number(item.price) * item.quantity,
      0
    );

    const updatedOrder = await prisma.order.update({
      where: { id: order.id },
      data: { totalAmount },
      include: {
        orderItems: {
          include: {
            product: true
          }
        }
      }
    });

    res.status(201).json(updatedOrder);
  } catch (error) {
    console.error('Error creating order:', error);
    res.status(500).json({ error: 'Erreur lors de la création de la commande' });
  }
});

// GET commande par ID
router.get('/:id', async (req, res) => {
  try {
    const order = await prisma.order.findUnique({
      where: { id: parseInt(req.params.id) },
      include: {
        orderItems: {
          include: {
            product: true
          }
        }
      }
    });
    res.json(order);
  } catch (error) {
    res.status(500).json({ error: 'Erreur lors de la récupération de la commande' });
  }
});

export default router;