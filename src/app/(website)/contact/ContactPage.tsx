'use client';
import Link from 'next/link';
import { Grid, Column, Row, Button } from '@umami/react-zen';
import PageHeader from '@/components/PageHeader';
import SocialMedia from '@/components/SocialMedia';
import ContactForm from './ContactForm';

export default function ContactPage() {
  return (
    <>
      <PageHeader
        title="Contact / Contactez-nous"
        description="We would love to hear from you! For any questions, partnership, or support, please fill out the form below. / Nous serions ravis d’avoir de vos nouvelles ! Pour toute question, partenariat ou support, veuillez remplir le formulaire ci-dessous."
      />
      <Row justifyContent="center">
        <Grid columns={{ xs: '1fr', md: '1fr 1fr' }} maxWidth="800px">
          <ContactForm />
          <Column alignItems="center" gap="12" style={{ marginTop: '3rem' }}>
            <Column alignItems="center" gap="6">
              <h3>Book a demo / Réserver une démo</h3>
              <Button variant="primary" asChild>
                <Link href="https://calendly.com/digizus/demo" target="_blank">
                  Book a meeting / Réserver un rendez-vous
                </Link>
              </Button>
            </Column>
            <Column alignItems="center" gap="6">
              <h3>Connect with us / Suivez-nous</h3>
              <SocialMedia size="lg" />
            </Column>
          </Column>
        </Grid>
      </Row>
    </>
  );
}
