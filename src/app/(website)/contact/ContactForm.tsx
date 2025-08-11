import { Select, Form, FormField, FormSubmitButton, TextArea, TextField } from '@umami/react-zen';
import { useState } from 'react';

const items = ['Less than 20', '20-49', '50-499', '500+'];

export default function ContactForm() {
  const [sent, setSent] = useState(false);
  const handleSubmit = async (data: any) => {
    await fetch('/api/contact', { method: 'POST', body: JSON.stringify(data) });
    setSent(true);
  };

  if (sent) {
    return (
      <h2 style={{ width: 400, margin: 'auto' }}>
        Thank you! We will get in touch shortly. / Merci ! Nous vous contacterons rapidement.
      </h2>
    );
  }

  return (
    <Form onSubmit={handleSubmit} style={{ width: 400, margin: 'auto' }}>
      <FormField
        label="Full name / Nom complet"
        name="name"
        rules={{ required: 'Required / Requis' }}
      >
        <TextField placeholder="John Smith / Jean Dupont" style={{ width: '100%' }} />
      </FormField>
      <FormField
        label="Work email / Email professionnel"
        name="email"
        rules={{ required: 'Required / Requis' }}
      >
        <TextField placeholder="john@company.com" style={{ width: '100%' }} />
      </FormField>
      <FormField label="Title / Poste" name="title">
        <TextField placeholder="Support Manager / Responsable support" style={{ width: '100%' }} />
      </FormField>
      <FormField label="Company / Entreprise" name="company">
        <TextField placeholder="Company, Inc. / Société, SARL" style={{ width: '100%' }} />
      </FormField>
      <FormField label="Company size / Taille de l'entreprise" name="size">
        <Select
          placeholder="Select a value / Sélectionnez une valeur"
          items={items}
          style={{ width: '100%' }}
        />
      </FormField>
      <FormField
        label="Tell us about your use case / Décrivez votre besoin"
        name="comment"
        rules={{ required: 'Required / Requis' }}
      >
        <TextArea style={{ height: 300, width: 400 }} />
      </FormField>
      <FormSubmitButton variant="primary">Submit / Envoyer</FormSubmitButton>
    </Form>
  );
}
