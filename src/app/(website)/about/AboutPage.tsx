'use client';
import PageHeader from '@/components/PageHeader';
import { Box } from '@umami/react-zen';

export default function AboutPage() {
  return (
    <>
      <PageHeader title="About Digizus Helpdesk" />
      <Box style={{ margin: 'auto', maxWidth: 600 }}>
        <p>
          <strong>Digizus Helpdesk</strong> is dedicated to empowering organizations worldwide with modern, efficient, and user-friendly support solutions. Our mission is to help every business deliver outstanding customer and IT support, no matter their size or industry.<br />
          <span style={{ fontStyle: 'italic', color: '#888' }}>
            Digizus Helpdesk s'engage à fournir aux organisations du monde entier des solutions de support modernes, efficaces et faciles à utiliser. Notre mission est d'aider chaque entreprise à offrir un support client et IT exceptionnel, quelle que soit sa taille ou son secteur d'activité.
          </span>
        </p>
        <p>
          We believe that great service starts with great tools. That's why we focus on building a platform that is flexible, scalable, and accessible—so your team can focus on what matters most: helping people.<br />
          <span style={{ fontStyle: 'italic', color: '#888' }}>
            Nous croyons que l'excellence du service commence par d'excellents outils. C'est pourquoi nous développons une plateforme flexible, évolutive et accessible, pour que votre équipe puisse se concentrer sur l'essentiel : aider les personnes.
          </span>
        </p>
      </Box>
    </>
  );
}
