import React from 'react';

interface FreeEbookTemplateProps {
  email?: string;
}

export const FreeEbookTemplate = ({ email }: FreeEbookTemplateProps) => {
  return (
    <html>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <title>Votre ebook gratuit "Unis pour impacter" est arrivé ! 📖</title>
      </head>
      <body style={main}>
        <div style={container}>
          {/* Header */}
          <div style={header}>
            <img
              src={`${process.env.NEXT_PUBLIC_APP_URL}/magape_bg_removed.png`}
              width="80"
              height="80"
              alt="MAGAPE Logo"
              style={logo}
            />
            <h1 style={headerTitle}>MAGAPE</h1>
            <p style={headerSubtitle}>Mouvement d'Agapè</p>
          </div>

          {/* Main Content */}
          <div style={content}>
            <p style={greeting}>Bonjour,</p>
            
            <p style={mainText}>
              Merci de vous être inscrit(e) à notre newsletter ! Comme promis, voici votre ebook gratuit :
            </p>

            <div style={ebookSection}>
              <img
                src={`${process.env.NEXT_PUBLIC_APP_URL}/images/book_model_2.png`}
                width="200"
                height="280"
                alt="Ebook Unis pour impacter"
                style={ebookCover}
              />
              <h2 style={ebookTitle}>"Unis pour impacter"</h2>
              <p style={ebookSubtitle}>Le guide pour bâtir l'unité chrétienne</p>
              
              <a
                href={`${process.env.NEXT_PUBLIC_APP_URL}/pdf/book.pdf`}
                style={downloadButton}
              >
                📖 Télécharger l'ebook
              </a>
            </div>

            <p style={description}>
              Dans cet ebook, vous découvrirez des clés bibliques et pratiques pour :
            </p>

            <div style={benefitsList}>
              <p style={benefitItem}>✓ Renforcer vos relations fraternelles</p>
              <p style={benefitItem}>✓ Bâtir l'unité dans votre communauté</p>
              <p style={benefitItem}>✓ Approfondir votre foi et votre engagement</p>
              <p style={benefitItem}>✓ Impacter positivement votre entourage</p>
            </div>

            <hr style={divider} />

            <p style={newsletterInfo}>
              En tant qu'abonné(e) à notre newsletter, vous recevrez également :
            </p>

            <div style={newsletterBenefits}>
              <p style={benefitItem}>📚 Des ressources inspirantes exclusives</p>
              <p style={benefitItem}>📅 Les actualités MAGAPE et nos événements</p>
              <p style={benefitItem}>🤝 Des témoignages de notre communauté</p>
              <p style={benefitItem}>💡 Des conseils pour grandir dans la foi</p>
            </div>
          </div>

          {/* Footer */}
          <div style={footer}>
            <p style={footerText}>
              Que Dieu vous bénisse dans votre marche avec Lui !
            </p>
            <p style={signature}>
              L'équipe MAGAPE
            </p>

            <hr style={divider} />

            <p style={unsubscribe}>
              Vous recevez cet email car vous vous êtes inscrit(e) à notre newsletter avec l'adresse : {email}
            </p>
            <p style={unsubscribe}>
              <a href="https://magape.org/unsubscribe" style={unsubscribeLink}>
                Se désabonner
              </a>
            </p>
          </div>
        </div>
      </body>
    </html>
  );
};

// Styles
const main = {
  backgroundColor: '#f6f9fc',
  fontFamily: '-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Oxygen-Sans,Ubuntu,Cantarell,"Helvetica Neue",sans-serif',
};

const container = {
  backgroundColor: '#ffffff',
  margin: '0 auto',
  padding: '20px 0 48px',
  marginBottom: '64px',
  maxWidth: '600px',
};

const header = {
  textAlign: 'center' as const,
  padding: '32px 0',
  backgroundColor: '#1f2937',
  borderRadius: '8px 8px 0 0',
};

const logo = {
  margin: '0 auto',
};

const headerTitle = {
  color: '#ffffff',
  fontSize: '24px',
  fontWeight: 'bold',
  margin: '16px 0 4px 0',
};

const headerSubtitle = {
  color: '#9ca3af',
  fontSize: '14px',
  margin: '0',
};

const content = {
  padding: '32px',
};

const greeting = {
  color: '#374151',
  fontSize: '18px',
  fontWeight: '600',
  margin: '0 0 16px 0',
};

const mainText = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '0 0 24px 0',
};

const ebookSection = {
  textAlign: 'center' as const,
  padding: '24px',
  backgroundColor: '#f9fafb',
  borderRadius: '8px',
  margin: '24px 0',
};

const ebookCover = {
  margin: '0 auto 16px auto',
  borderRadius: '4px',
  boxShadow: '0 4px 6px -1px rgba(0, 0, 0, 0.1)',
};

const ebookTitle = {
  color: '#1f2937',
  fontSize: '20px',
  fontWeight: 'bold',
  margin: '16px 0 8px 0',
};

const ebookSubtitle = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '0 0 24px 0',
};

const downloadButton = {
  backgroundColor: '#fe1556',
  borderRadius: '6px',
  color: '#ffffff',
  fontSize: '16px',
  fontWeight: '600',
  textDecoration: 'none',
  textAlign: 'center' as const,
  display: 'inline-block',
  padding: '12px 24px',
  margin: '16px 0',
};

const description = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '24px 0 16px 0',
};

const benefitsList = {
  margin: '16px 0 24px 0',
};

const benefitItem = {
  color: '#374151',
  fontSize: '14px',
  lineHeight: '20px',
  margin: '8px 0',
};

const divider = {
  borderColor: '#e5e7eb',
  margin: '32px 0',
};

const newsletterInfo = {
  color: '#4b5563',
  fontSize: '16px',
  lineHeight: '24px',
  margin: '24px 0 16px 0',
};

const newsletterBenefits = {
  margin: '16px 0',
};

const footer = {
  textAlign: 'center' as const,
  padding: '32px',
  backgroundColor: '#f9fafb',
  borderRadius: '0 0 8px 8px',
};

const footerText = {
  color: '#374151',
  fontSize: '16px',
  fontWeight: '600',
  margin: '0 0 8px 0',
};

const signature = {
  color: '#6b7280',
  fontSize: '14px',
  margin: '0 0 24px 0',
};

const unsubscribe = {
  color: '#9ca3af',
  fontSize: '12px',
  lineHeight: '16px',
  margin: '4px 0',
};

const unsubscribeLink = {
  color: '#fe1556',
  textDecoration: 'underline',
};

export default FreeEbookTemplate;