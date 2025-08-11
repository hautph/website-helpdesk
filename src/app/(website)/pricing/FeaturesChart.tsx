'use client';
import { Fragment } from 'react';
import {
  Icon,
  Column,
  Text,
  Table,
  TableRow,
  TableColumn,
  TableCell,
  TableHeader,
  Icons,
  TableBody,
} from '@umami/react-zen';

const featuresChart = [
  {
    label: 'Ticket Management / Gestion des tickets',
    items: [
      ['Multi-channel (Email, Chat, Web)', true, true, true],
      ['Automated assignment / Assignation automatique', false, true, true],
      ['Custom fields / Champs personnalisés', false, true, true],
      ['Bulk actions / Actions groupées', false, true, true],
    ],
  },
  {
    label: 'Collaboration & Automation / Collaboration & Automatisation',
    items: [
      ['Internal notes / Notes internes', true, true, true],
      ['Team roles & permissions / Rôles & permissions', false, true, true],
      ['Macros & canned replies / Réponses pré-enregistrées', false, true, true],
      ['SLA tracking / Suivi SLA', false, false, true],
    ],
  },
  {
    label: 'Customer Experience / Expérience client',
    items: [
      ['Satisfaction surveys / Enquêtes de satisfaction', false, true, true],
      ['Customer portal / Portail client', false, true, true],
      ['Multilingual support / Support multilingue', false, true, true],
      ['Knowledge base / Base de connaissances', false, true, true],
    ],
  },
  {
    label: 'Reporting & Analytics / Rapports & Analyses',
    items: [
      ['Dashboard & reports / Tableaux de bord', true, true, true],
      ['Export data / Export de données', false, true, true],
      ['Custom reports / Rapports personnalisés', false, false, true],
    ],
  },
  {
    label: 'Security & Privacy / Sécurité & Confidentialité',
    items: [
      ['GDPR compliant', true, true, true],
      ['Data encryption / Chiffrement des données', false, true, true],
      ['Access logs / Journaux d’accès', false, false, true],
    ],
  },
  {
    label: 'Support',
    items: [
      ['Community support', true, true, true],
      ['Email support', false, true, true],
      ['Enterprise support', false, false, true],
      ['Uptime SLA', false, false, true],
      ['Onboarding assistance', false, false, true],
      ['Designated support engineer', false, false, true],
    ],
  },
];

export default function Features() {
  return (
    <Column>
      <Table>
        <TableHeader>
          <TableColumn align="center"></TableColumn>
          <TableColumn align="center">
            <Text weight="bold" size="5">
              Hobby
            </Text>
          </TableColumn>
          <TableColumn align="center">
            <Text weight="bold" size="5">
              Pro
            </Text>
          </TableColumn>
          <TableColumn align="center">
            <Text weight="bold" size="5">
              Enterprise
            </Text>
          </TableColumn>
        </TableHeader>
        <TableBody>
          {featuresChart.map(({ label, items }) => {
            return (
              <Fragment key={label}>
                <TableRow>
                  <TableCell colSpan={4}>
                    <Text weight="bold" size="5">
                      {label}
                    </Text>
                  </TableCell>
                </TableRow>
                {items.map((item, index) => {
                  // Use a unique key combining label and index
                  const rowKey = `${label.replace(/\s+/g, '-')}-${index}`;
                  return (
                    <TableRow key={rowKey}>
                      {item.map((data, i) => {
                        // Use a unique key for each cell
                        const cellKey = `${rowKey}-cell-${i}`;
                        return (
                          <TableCell key={cellKey} align={i > 0 ? 'center' : 'start'}>
                            {data === true ? (
                              <Icon>
                                <Icons.Check />
                              </Icon>
                            ) : (
                              data
                            )}
                          </TableCell>
                        );
                      })}
                    </TableRow>
                  );
                })}
              </Fragment>
            );
          })}
        </TableBody>
      </Table>
    </Column>
  );
}
