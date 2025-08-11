'use client';
import { useState } from 'react';
import { Icon, Icons } from '@umami/react-zen';
import styles from './Questions.module.css';
import TextBlock from '@/components/TextBlock';

const questions = [
  {
    question: 'What is an agent? / Qu’est-ce qu’un agent ?',
    answer: `An agent is a team member who can respond to tickets and help customers. / Un agent est un membre de l’équipe qui peut répondre aux tickets et aider les clients.`,
  },
  {
    question: 'How does the free trial work? / Comment fonctionne l’essai gratuit ?',
    answer: `You get 14 days of full access to all Professional features. No credit card required. / Vous bénéficiez de 14 jours d’accès complet à toutes les fonctionnalités Professionnel. Aucune carte bancaire requise.`,
  },
  {
    question: 'Can I upgrade or downgrade at any time? / Puis-je changer de forfait à tout moment ?',
    answer: `Yes, you can change your plan at any time from your account settings. / Oui, vous pouvez changer de forfait à tout moment depuis les paramètres de votre compte.`,
  },
  {
    question: 'Is my data secure? / Mes données sont-elles sécurisées ?',
    answer: `All data is encrypted and stored securely in compliance with GDPR. / Toutes les données sont chiffrées et stockées en conformité avec le RGPD.`,
  },
  {
    question: 'Can I export my data? / Puis-je exporter mes données ?',
    answer: `Yes, you can export all your data at any time. / Oui, vous pouvez exporter toutes vos données à tout moment.`,
  },
  {
    question: 'Where is support available? / Où le support est-il disponible ?',
    answer: `Support is available worldwide in English and French. / Le support est disponible dans le monde entier en anglais et en français.`,
  },
];

export default function Questions() {
  return (
    <>
      <TextBlock align="center">
        <h2>Frequently asked questions</h2>
      </TextBlock>
      <div className={styles.questions}>
        {questions.map(({ question, answer }) => {
          return (
            <Question key={question} question={question}>
              {answer}
            </Question>
          );
        })}
      </div>
    </>
  );
}

const Question = ({ question, children }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className={styles.question} onClick={() => setExpanded(state => !state)}>
      <div className={styles.text} data-digizus-event="faq-question-click">
        {question}
        <Icon className={styles.icon} rotate={expanded ? 90 : 0} size="sm">
          <Icons.Chevron />
        </Icon>
      </div>
      {expanded ? <div className={styles.answer}>{children}</div> : null}
    </div>
  );
};
