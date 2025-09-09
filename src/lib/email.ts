import { Resend } from 'resend';
import FreeEbookTemplate from '@/components/template/free-ebook-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendFreeEbookEmail = async ({ email }: { email: string }) => {
    const { data, error } = await resend.emails.send({
        from: 'MAGAPE <noreply@titosy.dev>',
        to: [email],
        subject: 'Votre ebook gratuit "Unis pour impacter" - MAGAPE',
        react: FreeEbookTemplate({ email }),
    });

    if (error) {
        console.error('Erreur Resend:', error);
        throw new Error('Erreur lors de l\'envoi de l\'email');
    }

    console.log('Email envoyé avec succès:', data);
    return data;
};