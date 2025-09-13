'use server';

import { stripe } from './stripe';
import { redirect } from 'next/navigation';

interface ProductInfo {
  id: string;
  name: string;
  model?: string;
  size?: string;
  quantity: number;
}

// Product configurations for Stripe
const PRODUCT_CONFIGS = {
  maillot: {
    name: 'Maillot MAGAPE',
    basePrice: 2500, // 25.00 EUR in cents
    description: 'Portez vos couleurs, faites partie de l\'équipe'
  },
  cahier: {
    name: 'Cahier ECODIM',
    basePrice: 1500, // 15.00 EUR in cents
    description: 'Former la nouvelle génération... en s\'amusant'
  }
};

export async function createCheckoutSession(productInfo: ProductInfo, customerEmail?: string) {
  try {
    const config = PRODUCT_CONFIGS[productInfo.id as keyof typeof PRODUCT_CONFIGS];
    
    if (!config) {
      throw new Error(`Product configuration not found for ${productInfo.id}`);
    }

    // Create line item description with model and size info
    let itemDescription = config.description;
    if (productInfo.model) {
      itemDescription += ` - ${productInfo.model}`;
    }
    if (productInfo.size) {
      itemDescription += ` (Taille: ${productInfo.size})`;
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: 'price_1S61UbClluL5RGJZaqDbNEND',
          quantity: productInfo.quantity,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/shop/${productInfo.id}`,
      customer_email: customerEmail,
    });

    if (!session.url) {
      throw new Error('Failed to create checkout session URL');
    }

    redirect(session.url);
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw new Error('Failed to create checkout session');
  }
}

export async function createQuickCheckoutSession(productId: 'maillot' | 'cahier') {
  try {
    const config = PRODUCT_CONFIGS[productId];
    
    if (!config) {
      throw new Error(`Product configuration not found for ${productId}`);
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price_data: {
            currency: 'eur',
            product_data: {
              name: config.name,
              description: config.description,
              images: [
                productId === 'maillot' 
                  ? `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/image-1.png`
                  : `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/images/child-book.jpg`
              ],
            },
            unit_amount: config.basePrice,
          },
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/shop`,
      metadata: {
        productId,
        productName: config.name,
        quantity: '1',
      },
    });

    if (!session.url) {
      throw new Error('Failed to create checkout session URL');
    }

    redirect(session.url);
  } catch (error) {
    console.error('Error creating quick checkout session:', error);
    throw new Error('Failed to create checkout session');
  }
}
