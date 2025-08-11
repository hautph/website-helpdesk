'use client';
import { Box, Column, Grid, Heading, Icon, Text, Row } from '@umami/react-zen';
import GetStartedBanner from '@/components/GetStartedBanner';
import PageHeader from '@/components/PageHeader';
import {
  Bolt,
  Data,
  Device,
  Export,
  Filter,
  Gauge,
  Gear,
  Graph,
  Key,
  Language,
  Lightbulb,
  Network,
  Privacy,
  Share,
  Tag,
  Team,
  User,
} from 'src/components/svg';

const items = [
  {
    title: 'Ticket Management / Gestion des tickets',
    description: `Efficiently manage, assign, and resolve support requests with a modern, intuitive helpdesk platform. / Gérez, attribuez et résolvez efficacement les demandes d'assistance avec une plateforme de helpdesk moderne et intuitive.`,
    items: [
      {
        title: 'Multi-channel Support / Support multicanal',
        description: [
          'Receive and respond to tickets from email, chat, web forms, and more. / Recevez et répondez aux tickets depuis l’email, le chat, les formulaires web, etc.',
        ],
        icon: <Device />,
      },
      {
        title: 'Automated Ticket Routing / Routage automatique',
        description: [
          'Automatically assign tickets to the right agent or team based on rules and priorities. / Attribuez automatiquement les tickets au bon agent ou à la bonne équipe selon des règles et priorités.',
        ],
        icon: <Gear />,
      },
      {
        title: 'SLA Tracking / Suivi des SLA',
        description: [
          'Monitor response and resolution times to meet your service level agreements. / Surveillez les temps de réponse et de résolution pour respecter vos SLA.',
        ],
        icon: <Gauge />,
      },
      {
        title: 'Custom Fields / Champs personnalisés',
        description: [
          'Capture all the information you need with customizable ticket fields. / Collectez toutes les informations nécessaires grâce à des champs personnalisables.',
        ],
        icon: <Data />,
      },
      {
        title: 'Internal Notes / Notes internes',
        description: [
          'Collaborate privately on tickets with internal comments. / Collaborez en privé sur les tickets avec des commentaires internes.',
        ],
        icon: <Team />,
      },
      {
        title: 'Bulk Actions / Actions groupées',
        description: [
          'Update, assign, or resolve multiple tickets at once. / Mettez à jour, attribuez ou résolvez plusieurs tickets en une seule action.',
        ],
        icon: <Bolt />,
      },
    ],
  },
  {
    title: 'Self-Service & Knowledge Base / Base de connaissances',
    description:
      'Empower users to find answers fast with a searchable, multilingual knowledge base. / Permettez aux utilisateurs de trouver rapidement des réponses grâce à une base de connaissances multilingue et consultable.',
    items: [
      {
        title: 'Knowledge Articles / Articles de la base',
        description: [
          'Create and organize help articles for common questions. / Créez et organisez des articles d’aide pour les questions fréquentes.',
        ],
        icon: <Lightbulb />,
      },
      {
        title: 'Multilingual Support / Support multilingue',
        description: [
          'Serve content in English, French, and more. / Proposez du contenu en anglais, français, etc.',
        ],
        icon: <Language />,
      },
      {
        title: 'Search & Suggestions / Recherche et suggestions',
        description: [
          'Smart search and article suggestions for faster resolution. / Recherche intelligente et suggestions d’articles pour une résolution plus rapide.',
        ],
        icon: <Filter />,
      },
      {
        title: 'Customer Portal / Portail client',
        description: [
          'Let users track their tickets and browse help resources. / Permettez aux utilisateurs de suivre leurs tickets et de consulter les ressources d’aide.',
        ],
        icon: <User />,
      },
    ],
  },
  {
    title: 'Collaboration & Automation / Collaboration et automatisation',
    description: `Boost productivity with team collaboration tools and powerful workflow automation. / Améliorez la productivité grâce à des outils collaboratifs et à une automatisation avancée des processus.`,
    items: [
      {
        title: 'Team Collaboration / Collaboration d’équipe',
        description: [
          'Assign, escalate, and comment on tickets together. / Assignez, escaladez et commentez les tickets en équipe.',
        ],
        icon: <Team />,
      },
      {
        title: 'Automated Workflows / Flux de travail automatisés',
        description: [
          'Automate repetitive tasks and notifications. / Automatisez les tâches répétitives et les notifications.',
        ],
        icon: <Bolt />,
      },
      {
        title: 'Canned Responses / Réponses préenregistrées',
        description: [
          'Reply faster with reusable templates. / Répondez plus vite grâce à des modèles réutilisables.',
        ],
        icon: <Share />,
      },
      {
        title: 'Integrations / Intégrations',
        description: [
          'Connect with email, chat, and third-party tools. / Connectez-vous à l’email, au chat et à des outils tiers.',
        ],
        icon: <Network />,
      },
    ],
  },
  {
    title: 'Analytics & Reporting / Analytique et rapports',
    description: `Gain actionable insights into your support operations with real-time analytics and custom reports. / Obtenez des informations exploitables sur votre support grâce à l’analytique en temps réel et aux rapports personnalisés.`,
    items: [
      {
        title: 'Dashboard / Tableau de bord',
        description: [
          'Monitor key metrics at a glance. / Surveillez les indicateurs clés en un coup d’œil.',
        ],
        icon: <Gauge />,
      },
      {
        title: 'Custom Reports / Rapports personnalisés',
        description: [
          'Build and export reports for any data you need. / Créez et exportez des rapports sur toutes vos données.',
        ],
        icon: <Export />,
      },
      {
        title: 'Satisfaction Surveys / Enquêtes de satisfaction',
        description: [
          'Collect feedback after ticket resolution. / Collectez les retours après la résolution des tickets.',
        ],
        icon: <Graph />,
      },
      {
        title: 'SLAs & Performance / SLA et performance',
        description: [
          'Track compliance and agent performance. / Suivez la conformité et la performance des agents.',
        ],
        icon: <Gauge />,
      },
    ],
  },
  {
    title: 'Security & Privacy / Sécurité et confidentialité',
    description: `Protect your data and ensure compliance with robust security and privacy controls. / Protégez vos données et assurez la conformité grâce à des contrôles de sécurité et de confidentialité renforcés.`,
    items: [
      {
        title: 'GDPR & CCPA Compliance / Conformité RGPD & CCPA',
        description: [
          'All data is handled securely and in compliance with global standards. / Toutes les données sont traitées de manière sécurisée et conforme aux normes internationales.',
        ],
        icon: <Privacy />,
      },
      {
        title: 'Data Encryption / Chiffrement des données',
        description: [
          'Your data is encrypted in transit and at rest. / Vos données sont chiffrées en transit et au repos.',
        ],
        icon: <Key />,
      },
      {
        title: 'Role-based Access / Accès basé sur les rôles',
        description: ['Control who can see and do what. / Contrôlez qui peut voir et faire quoi.'],
        icon: <Tag />,
      },
      {
        title: 'Data Ownership / Propriété des données',
        description: [
          'You own your data, always. / Vous êtes toujours propriétaire de vos données.',
        ],
        icon: <Key />,
      },
    ],
  },
];

export default function FeaturesPage() {
  return (
    <>
      <PageHeader
        title="Features / Fonctionnalités"
        description="Discover the key features of our modern Helpdesk & Service Desk platform. / Découvrez les fonctionnalités clés de notre plateforme Helpdesk & Service Desk."
      />
      <Column gap="6">
        {items.map(({ title, description, items }) => {
          return (
            <Box key={title}>
              <Heading size="4">{title}</Heading>
              <Box paddingY="6" maxWidth="600px">
                <Text color="muted" size="3">
                  {description}
                </Text>
              </Box>
              <Grid columns="repeat(auto-fit, minmax(300px, 1fr))" gap="4">
                {items.map((item, index) => (
                  <Box key={index} borderRadius="2" padding="4" backgroundColor="2">
                    <Row gap="3" alignItems="center">
                      <Icon size="md">{item.icon}</Icon>
                      <Text weight="bold">{item.title}</Text>
                    </Row>
                    {item.description.map((text, index) => (
                      <Text key={index} as="p" color="muted">
                        {text}
                      </Text>
                    ))}
                  </Box>
                ))}
              </Grid>
            </Box>
          );
        })}
        <section>
          <GetStartedBanner />
        </section>
      </Column>
    </>
  );
}
