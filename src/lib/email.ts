import { Resend } from 'resend';
import FreeEbookTemplate from '@/components/template/free-ebook-template';

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendFreeEbookEmail = async ({ email }: { email: string }) => {
    const { data, error } = await resend.emails.send({
        from: 'MAGAPE <noreply@titosy.dev>',
        to: [email],
        subject: 'Votre ebook gratuit "Unis pour impacter" - MAGAPE',
        react: FreeEbookTemplate({ email }),
        attachments: [
            {
                filename: 'magape_bg_removed.png',
                path: `${process.env.NEXT_PUBLIC_APP_URL}/magape_bg_removed.png`,
                contentId: 'logo-image'
            },
            {
                filename: 'book_model_2.png',
                path: `${process.env.NEXT_PUBLIC_APP_URL}/images/book_model_2.png`,
                contentId: 'ebook-cover'
            },
            {
                filename: 'unis-pour-impacter.pdf',
                path: `${process.env.NEXT_PUBLIC_APP_URL}/pdf/unis-pour-impacter.pdf`,
                contentId: 'ebook-download'
            },
        ],
    });

    if (error) {
        console.error('Erreur Resend:', error);
        throw new Error('Erreur lors de l\'envoi de l\'email');
    }

    console.log('Email envoyé avec succès:', data);
    return data;
};