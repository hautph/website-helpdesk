'use client';
import { Block, Code, Analytics } from 'src/components/svg';
import TextBlock from '@/components/TextBlock';
import styles from './Statements.module.css';

const statements = [
  {
    title: 'Multi-channel Support',
    description: `
Manage tickets from email, chat, and web—all in one place. Digizus Helpdesk keeps your support organized and efficient, so no request is ever missed.
<span style="font-style:italic;color:#888">Gérez les tickets provenant de l'e-mail, du chat et du web—tout au même endroit. Digizus Helpdesk centralise votre support pour ne manquer aucune demande.</span>
    `,
    image: <Analytics />, 
  },
  {
    title: 'Collaboration & Automation',
    description: `
Assign, escalate, and resolve tickets as a team. Automate repetitive tasks and focus on what matters most: helping your users.<br />
<span style="font-style:italic;color:#888">Assignez, escaladez et résolvez les tickets en équipe. Automatisez les tâches répétitives et concentrez-vous sur l'essentiel : aider vos utilisateurs.</span>
    `,
    image: <Code />, 
  },
  {
    title: 'Customer Satisfaction',
    description: `
Track response times, collect feedback, and improve your service quality with built-in reports and satisfaction surveys.<br />
<span style="font-style:italic;color:#888">Suivez les temps de réponse, recueillez les avis et améliorez la qualité de votre service grâce aux rapports intégrés et aux enquêtes de satisfaction.</span>
    `,
    image: <Block />, 
  },
];

export default function Statements() {
  return (
    <section className={styles.container}>
      <div className={styles.header}>
        <TextBlock align="center" className={styles.block}>
          <h1>Digizus makes analyzing your data effortless</h1>
        </TextBlock>
      </div>
      <div className={styles.items}>
        {statements.map(({ title, description, image }) => {
          return (
            <div key={title} className={styles.item}>
              <TextBlock size="sm" align="center">
                <h1>
                  <div className={styles.image}>{image}</div> {title}
                </h1>
                <p>{description}</p>
              </TextBlock>
            </div>
          );
        })}
      </div>
    </section>
  );
}
