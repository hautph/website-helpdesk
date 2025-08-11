'use client';
import TextBlock from '@/components/TextBlock';
import styles from './Teams.module.css';

export default function Teams() {
  return (
    <section>
      <TextBlock size="md" align="center">
        <h1>Digizus Helpdesk: Support for Every Team, Everywhere</h1>
        <h1 style={{ fontWeight: 'normal', fontSize: '1.2em', marginTop: 8 }}>
          Digizus Helpdesk : Assistance pour toutes les équipes, partout
        </h1>
      </TextBlock>
      <div className={styles.row}>
        <TextBlock size="md">
          <h2>From Startups to Enterprises</h2>
          <p>
            Every day, organizations of all sizes trust Digizus Helpdesk to deliver fast, reliable, and friendly support to their customers and teams. Our platform adapts to any support workflow, from IT service management to customer care.<br />
            <span style={{ fontStyle: 'italic', color: '#888' }}>
              Des startups aux grandes entreprises, Digizus Helpdesk accompagne chaque jour des organisations de toutes tailles pour offrir un support rapide, fiable et convivial à leurs clients et équipes.
            </span>
          </p>
        </TextBlock>
        <TextBlock size="md">
          <h2>Seamless Integration</h2>
          <p>
            Digizus integrates perfectly with your existing tools and channels. Use Digizus as your central hub for managing support tickets, live chat, email, and more—ensuring no request is ever missed.<br />
            <span style={{ fontStyle: 'italic', color: '#888' }}>
              Digizus s'intègre parfaitement à vos outils et canaux existants. Centralisez la gestion des tickets, du chat, des emails, etc.—aucune demande ne sera oubliée.
            </span>
          </p>
        </TextBlock>
        <TextBlock size="md">
          <h2>Collaboration Made Easy</h2>
          <p>
            Invite your entire team—from support agents to managers—to collaborate on tickets, share knowledge, and deliver outstanding service. Customizable roles and permissions keep your data secure and your workflows efficient.<br />
            <span style={{ fontStyle: 'italic', color: '#888' }}>
              Invitez toute votre équipe—agents, managers, etc.—à collaborer sur les tickets, partager des connaissances et offrir un service exceptionnel. Les rôles et permissions personnalisables garantissent la sécurité des données et l'efficacité des processus.
            </span>
          </p>
        </TextBlock>
      </div>
    </section>
  );
}
