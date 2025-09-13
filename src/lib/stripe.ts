import Stripe from 'stripe';

export const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: '2025-08-27.basil',
    typescript: true,
});

export const createCheckoutSession = async (productId: string, userEmail?: string) => {
    const sessionConfig: Stripe.Checkout.SessionCreateParams = {
        payment_method_types: ['card'],
        line_items: [{ price: productId, quantity: 1 }],
        mode: 'payment',
        customer_email: userEmail,
    };

    // Add customer email if provided
    if (userEmail) {
        sessionConfig.customer_email = userEmail;
    }

    const session = await stripe.checkout.sessions.create(sessionConfig);
    
    return session;
};