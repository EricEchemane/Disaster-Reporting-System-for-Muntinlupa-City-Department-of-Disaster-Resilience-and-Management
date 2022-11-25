/* eslint-disable @next/next/no-img-element */
import { Modal, Stack, Table, Title, Text, Button } from '@mantine/core';
import Http from 'http/adapter';
import Head from 'next/head';
import { IIncident } from 'pages/admin';
import React, { useState } from 'react';

type Props = {
    incidents: IIncident[];
    brgy: string;
    login: () => void;
};

export default function AdminDashboard({ incidents, brgy, login }: Props) {

    const [selectedIncident, setSelectedIncident] = useState<IIncident | null>(null);
    const [loading, setLoading] = useState(false);

    const resolveIncident = (incidentId: string) => {
        Http.post('/api/resolve', { incidentId }, {
            loadingToggler: setLoading,
            onFail: alert,
            onSuccess: (data: any) => {
                login();
            }
        });
    };

    const rows = incidents.map((incident) => (
        <tr key={incident._id}>
            <td>{new Date(incident.date).toDateString()} - {new Date(incident.date).toLocaleTimeString()}</td>
            <td>{incident.description}</td>
            <td>
                <Stack spacing={0}>
                    <div>{incident.reporter.fullName}</div>
                    <div>{incident.reporter.contactNumber}</div>
                    <div>{incident.reporter.address}</div>
                </Stack>
            </td>
            <td>
                <img
                    onClick={() => setSelectedIncident(incident)}
                    style={{ cursor: 'pointer' }}
                    width={100}
                    src={incident.photos}
                    alt='photo of incident' />
            </td>
            <td>
                {!incident.resolved
                    ? <Button
                        loading={loading}
                        onClick={() => resolveIncident(incident._id)}
                        variant='light'> Mark as resolved </Button>
                    : <Button
                        disabled
                        variant='light'> Resolved </Button>}
            </td>
        </tr>
    ));

    return <>
        <Head>
            <title> {brgy} Admin </title>
        </Head>
        <Stack p={'1rem'} spacing='lg'>
            <Title> Reports from {brgy} </Title>
            <Table>
                <thead>
                    <tr>
                        <th> Time and Date Reported </th>
                        <th> Incident Description </th>
                        <th> Report from: </th>
                        <th> Photo </th>
                        <th> Action </th>
                    </tr>
                </thead>
                <tbody>{rows}</tbody>
            </Table>
        </Stack>
        <Modal
            size={'lg'}
            opened={!!selectedIncident}
            onClose={() => setSelectedIncident(null)}
            title={"Incident from Alabang"}
        >
            <Stack>
                <img
                    style={{ width: '100%' }}
                    src={selectedIncident?.photos || ""}
                    alt='photo of incident' />
                <Title order={5}> Reported by: </Title>
                <Text>
                    {`${selectedIncident?.reporter.fullName} | ${selectedIncident?.reporter.contactNumber} | ${selectedIncident?.reporter.address}`}
                </Text>
            </Stack>
        </Modal>
    </>;
}