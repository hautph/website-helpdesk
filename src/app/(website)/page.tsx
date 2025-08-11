


import TextBlock from '@/components/TextBlock';
import { Button, Row, Column, Text } from '@umami/react-zen';
import Link from 'next/link';
import CompanyLogo from '@/components/CompanyLogo';
import SocialMedia from '@/components/SocialMedia';

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section
        style={{
          padding: '64px 0 32px 0',
          background: 'linear-gradient(90deg, #f8fafc 60%, #e0e7ef 100%)',
        }}
      >
        <Column alignItems="center" gap="6">
          <CompanyLogo />
          <h1 style={{ fontSize: 40, fontWeight: 800, margin: 0, textAlign: 'center' }}>
            Digizus Helpdesk
          </h1>
          <h2
            style={{ fontWeight: 400, fontSize: 22, color: '#555', margin: 0, textAlign: 'center' }}
          >
            Modern support for modern teams
            <br />
            <span style={{ fontWeight: 400, fontSize: 18, color: '#888' }}>
              Support moderne pour les équipes modernes
            </span>
          </h2>
          <TextBlock size="lg" align="center" style={{ maxWidth: 600, margin: '0 auto' }}>
            Empower your business with a powerful, flexible, and multilingual helpdesk platform.
            <br />
            <span style={{ fontStyle: 'italic', color: '#888' }}>

              Offrez à votre entreprise une plateforme d&apos;assistance puissante, flexible et
              multilingue.

            </span>
          </TextBlock>
          <Button variant="primary" size="lg" asChild>
            <Link href="/pricing">Get Started / Commencer</Link>
          </Button>
          <SocialMedia size="md" />
        </Column>
      </section>

      {/* Features Highlight Row */}
      <section style={{ background: '#fff', padding: '32px 0' }}>
        <Column alignItems="center" gap="6">
          <Row gap="8" justifyContent="center" style={{ flexWrap: 'wrap', maxWidth: 900 }}>
            <FeatureIcon
              img="/images/feature-user-journeys.png"
              title="Omnichannel"
              desc="Email, chat, web & more"
            />
            <FeatureIcon
              img="/images/feature-stats.png"
              title="Analytics"
              desc="Real-time insights"
            />
            <FeatureIcon
              img="/images/feature-funnels.png"
              title="Automation"
              desc="Workflows & macros"
            />
            <FeatureIcon
              img="/images/feature-user-retention.png"
              title="Satisfaction"
              desc="Surveys & feedback"
            />
          </Row>
        </Column>
      </section>

      {/* Testimonial/Brand Section */}
      <section style={{ background: '#f8fafc', padding: '32px 0 48px 0' }}>
        <Column alignItems="center" gap="4">
          <Text size="4" weight="bold" style={{ color: '#555' }}>
            Trusted by teams worldwide / Approuvé par des équipes du monde entier
          </Text>
          <Row gap="8" justifyContent="center" style={{ flexWrap: 'wrap', marginTop: 16 }}>
            <img
              src="/images/logo-netflix.png"
              alt="Netflix"
              height={32}
              style={{ opacity: 0.7 }}
            />
            <img src="/images/logo-hulu.png" alt="Hulu" height={32} style={{ opacity: 0.7 }} />
            <img src="/images/logo-espn.png" alt="ESPN" height={32} style={{ opacity: 0.7 }} />
            <img src="/images/logo-intel.png" alt="Intel" height={32} style={{ opacity: 0.7 }} />
            <img src="/images/logo-huawei.png" alt="Huawei" height={32} style={{ opacity: 0.7 }} />
            <img
              src="/images/logo-accenture.png"
              alt="Accenture"
              height={32}
              style={{ opacity: 0.7 }}
            />
          </Row>
        </Column>
      </section>

      {/* Canada Service Desk/Helpdesk Info Section (Bilingual) */}
      <section style={{ background: '#fff', padding: '40px 0 48px 0', borderTop: '1px solid #e0e7ef' }}>
        <Column alignItems="center" gap="6" style={{ maxWidth: 900, margin: '0 auto' }}>
          <h2 style={{ fontSize: 28, fontWeight: 700, color: '#1a237e', marginBottom: 8, textAlign: 'center' }}>
            Service Desk & Helpdesk for Canada
            <br />
            <span style={{ fontSize: 20, fontWeight: 400, color: '#555' }}>
              Centre d'assistance et Service Desk pour le Canada
            </span>
          </h2>
          <ul style={{ fontSize: 18, color: '#333', lineHeight: 1.7, maxWidth: 700 }}>
            <li>
              <b>Bilingual Support / Support bilingue:</b> English & French interface and agents for all Canadian regions.<br />
              <span style={{ color: '#888', fontSize: 16 }}>
                Interface et agents en anglais et en français pour toutes les régions du Canada.
              </span>
            </li>
            <li>
              <b>Canadian Data Privacy / Confidentialité des données:</b> Data hosted in Canada, compliant with PIPEDA & provincial laws.<br />
              <span style={{ color: '#888', fontSize: 16 }}>
                Données hébergées au Canada, conformité à la LPRPDE et aux lois provinciales.
              </span>
            </li>
            <li>
              <b>Local Expertise / Expertise locale:</b> Dedicated support teams with experience in Canadian public & private sectors.<br />
              <span style={{ color: '#888', fontSize: 16 }}>
                Équipes d'assistance dédiées, expérience secteur public et privé canadien.
              </span>
            </li>
            <li>
              <b>24/7 Availability / Disponibilité 24/7:</b> Always-on support for critical operations.<br />
              <span style={{ color: '#888', fontSize: 16 }}>
                Assistance continue pour les opérations critiques.
              </span>
            </li>
          </ul>
        </Column>
      </section>
    </main>
  );
}

function FeatureIcon({ img, title, desc }) {
  return (
    <Column alignItems="center" gap="2" style={{ minWidth: 160, maxWidth: 200 }}>
      <img
        src={img}
        alt={title}
        height={56}
        style={{ borderRadius: 12, boxShadow: '0 2px 8px #e0e7ef' }}
      />
      <Text size="4" weight="bold" style={{ marginTop: 8 }}>
        {title}
      </Text>
      <Text size="2" color="muted">
        {desc}
      </Text>
    </Column>
  );
}
