'use client';
import { Button, Icon, Text, Box, Column, Row, Heading, Grid, Icons } from '@umami/react-zen';
import Link from 'next/link';
import { CLOUD_URL } from '@/lib/constants';
import { useMemo } from 'react';
import styles from './Plans.module.css';

export default function Plans() {
  // Build query string manually to ensure it's always a string
  const query = useMemo(() => '?ref=digizus-pricing', []);

  const plans = [
    {
      name: 'Starter / Débutant',
      price: '$0',
      interval: '/ month / mois',
      description: 'Perfect for small teams getting started. / Parfait pour les petites équipes qui débutent.',
      features: [
        'Up to 3 agents / Jusqu’à 3 agents',
        '100 tickets per month / 100 tickets par mois',
        'Basic ticketing & email support / Gestion de tickets et support email de base',
        'Community support / Support communautaire',
      ],
      url: `${CLOUD_URL.en}/signup${query}&plan=starter`,
      button: 'Get started / Commencer',
    },
    {
      name: 'Professional / Professionnel',
      price: '$29',
      interval: '/ month / mois',
      description: 'Advanced features for growing teams. / Fonctionnalités avancées pour les équipes en croissance.',
      features: [
        'Unlimited agents / Agents illimités',
        'Unlimited tickets / Tickets illimités',
        'Multi-channel support (email, chat, web) / Support multicanal (email, chat, web)',
        'Automation & workflows / Automatisation et flux de travail',
        'Knowledge base / Base de connaissances',
        'SLA tracking / Suivi des SLA',
        'Email support / Support par email',
      ],
      url: `${CLOUD_URL.en}/signup${query}&plan=pro`,
      button: 'Try 14-day free trial / Essayer 14 jours gratuits',
      variant: 'primary',
    },
    {
      name: 'Enterprise',
      price: 'Contact us / Contactez-nous',
      description: 'Custom solutions for large organizations. / Solutions personnalisées pour grandes entreprises.',
      features: [
        'All Professional features / Toutes les fonctionnalités Professionnel',
        'Custom integrations / Intégrations personnalisées',
        'Dedicated support / Support dédié',
        'Uptime SLA / SLA de disponibilité',
        'Onboarding assistance / Assistance à l’intégration',
        'Custom security & compliance / Sécurité et conformité personnalisées',
      ],
      url: 'mailto:sales@digizus.com?subject=Digizus Helpdesk enterprise pricing',
      button: 'Contact us / Contactez-nous',
    },
  ];

  return (
    <Grid
      gap="4"
      width="100%"
      columns="repeat(auto-fit, minmax(240px, 1fr))"
      alignItems="center"
      justifyContent="center"
    >
      {plans.map(
        ({ name, price, interval, description, features, url, button, variant = 'outline' }) => {
          return (
            <Column
              key={name}
              gap="3"
              border
              shadow="3"
              padding="6"
              borderRadius="3"
              style={
                name === 'Pro' ? { borderColor: 'var(--primary-color)', borderWidth: 2 } : null
              }
            >
              <Heading size="4">{name}</Heading>
              <Row alignItems="center" gap="2">
                <Text weight="bold" size="8">
                  {price}
                </Text>
                <Text color="muted">{interval}</Text>
              </Row>
              <Text>{description}</Text>
              <Box as="ul">
                {features.map((feat, index) => {
                  return (
                    <Row key={index} as="li" alignItems="center" gap="2">
                      <Row color="primary" alignItems="center">
                        <Icon size="sm">
                          <Icons.Check />
                        </Icon>
                      </Row>
                      <Text size="2">{feat}</Text>
                    </Row>
                  );
                })}
              </Box>
              <div className={styles.button}>
                <Button variant={variant as any} asChild>
                  <Link href={url}>{button}</Link>
                </Button>
              </div>
            </Column>
          );
        },
      )}
    </Grid>
  );
}
