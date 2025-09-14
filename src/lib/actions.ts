'use server';

import { stripe } from './stripe';

interface ProductInfo {
  stripeProductId: string;
  name: string;
  model?: string;
  size?: string;
  quantity: number;
}

// Product configurations mapped by Stripe Product ID
const STRIPE_PRODUCT_CONFIGS = {
  'prod_maillot_classique': {
    name: 'Maillot MAGAPE - Classique',
    description: 'Le design original aux couleurs emblématiques',
    priceId: 'price_1S61jeClluL5RGJZDgk9PYWI', // Main price ID for this product
    image: '/image-1.png',
    category: 'maillot'
  },
  'prod_maillot_premium': {
    name: 'Maillot MAGAPE - Premium',
    description: 'Version premium avec finitions spéciales',
    priceId: 'price_1S61UbClluL5RGJZaqDbNEND', // Update with actual price ID
    image: '/images/maillot_model_2.jpg',
    category: 'maillot'
  },
  'prod_cahier_petits': {
    name: 'Cahier ECODIM - Petits',
    description: 'Pour les 4-6 ans... en s\'amusant',
    priceId: 'price_1S61kYClluL5RGJZtNZ5kyPr', // Update with actual price ID
    image: '/images/child-book.jpg',
    category: 'cahier'
  },
  'prod_cahier_moyens': {
    name: 'Cahier ECODIM - Moyens',
    description: 'Pour les 7-10 ans... en apprenant',
    priceId: 'price_1S77ziClluL5RGJZ0iyxnkKh', // Update with actual price ID
    image: '/images/book_model_2.png',
    category: 'cahier'
  },
  'prod_cahier_grands': {
    name: 'Cahier ECODIM - Grands',
    description: 'Pour les 11-14 ans... en grandissant',
    priceId: 'price_1S61jeClluL5RGJZDgk9PYWI', // Update with actual price ID
    image: '/images/child-book.jpg',
    category: 'cahier'
  }
};

export async function createCheckoutSession(productInfo: ProductInfo, customerEmail?: string): Promise<string> {
  try {
    const config = STRIPE_PRODUCT_CONFIGS[productInfo.stripeProductId as keyof typeof STRIPE_PRODUCT_CONFIGS];
    
    if (!config) {
      throw new Error(`Product configuration not found for Stripe Product ID: ${productInfo.stripeProductId}`);
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      line_items: [
        {
          price: config.priceId,
          quantity: productInfo.quantity,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/shop`,
      customer_email: customerEmail,
      metadata: {
        stripeProductId: productInfo.stripeProductId,
        productName: productInfo.name,
        model: productInfo.model || '',
        size: productInfo.size || '',
        quantity: productInfo.quantity.toString(),
      },
    });

    if (!session.url) {
      throw new Error('Failed to create checkout session URL');
    }

    return session.url;
  } catch (error) {
    console.error('Error creating checkout session:', error);
    throw new Error('Failed to create checkout session');
  }
}

export async function createQuickCheckoutSession(stripeProductId: keyof typeof STRIPE_PRODUCT_CONFIGS): Promise<string> {
  try {
    const config = STRIPE_PRODUCT_CONFIGS[stripeProductId];
    
    if (!config) {
      throw new Error(`Product configuration not found for Stripe Product ID: ${stripeProductId}`);
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ['card'],
      currency: 'eur',
      line_items: [
        {
          price: config.priceId,
          quantity: 1,
        },
      ],
      mode: 'payment',
      success_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/checkout/success?session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${process.env.NEXT_PUBLIC_BASE_URL || 'http://localhost:3000'}/shop`,
      metadata: {
        stripeProductId,
        productName: config.name,
        quantity: '1',
      },
    });

    if (!session.url) {
      throw new Error('Failed to create checkout session URL');
    }

    return session.url;
  } catch (error) {
    console.error('Error creating quick checkout session:', error);
    throw new Error('Failed to create checkout session');
  }
}
