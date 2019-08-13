import React from 'react';
import { Table } from 'antd';

const activities = [
    { key: '1', hours: '7.30 - 8.30', activity: 'schodzenie się rycerzy i księżniczek' },
    { key: '2', hours: ' 8.30 - 9.00', activity: 'śniadanie' },
    { key: '3', hours: ' 9.00 - 9.20', activity: 'powitanie, wspólna modlitwa' },
    { key: '4', hours: ' 9.20 - 9.45', activity: 'psychomotoryka/grafomotoryka' },
    {
        key: '5',
        hours: ' 9.50 - 11.15',
        activity:
            'blok warsztatowy (mole książkowe, mali odkrywcy, matematyka dla smyka, skrzydlata kuchnia, plastyczne cudawianki oraz sensoplastyczne fiki-miki*)',
    },
    { key: '6', hours: ' 11.15 - 12.00', activity: 'ogródkowe zabawy' },
    { key: '7', hours: ' 12.00 - 12.30', activity: 'obiad' },
    { key: '8', hours: ' 12.30 - 12.40', activity: 'toaleta, mycie zębów' },
    { key: '9', hours: ' 12.40 - 13.20', activity: 'odpoczynek' },
    { key: '10', hours: ' 13.20 - 14.20', activity: 'wspólne gry i zabawy' },
    { key: '11', hours: ' 14.20 - 14.45', activity: 'podwieczorek' },
    { key: '12', hours: ' 14.45 - 15.45', activity: 'podsumowanie dnia, wspólna modlitwa' },
    { key: '13', hours: ' 15.45 - 16.00', activity: 'pożegnanie' },
];

const columns = [
    { title: `godziny`, key: 'hours', dataIndex: 'hours', width: '25%' },
    {
        title: 'zajęcia',
        key: 'activity',
        dataIndex: 'activity',
    },
];

export const Agenda = () => (
    <Table
        grid={{ gutter: 10, column: 12 }}
        dataSource={activities}
        columns={columns}
        pagination={false}
        size="middle"
        title={() => <h2>skrzydlaty plan dnia</h2>}
        footer={() => '*Szczegółowy plan warsztatów podamy w ostatnim tygodniu sierpnia.'}
    />
);
