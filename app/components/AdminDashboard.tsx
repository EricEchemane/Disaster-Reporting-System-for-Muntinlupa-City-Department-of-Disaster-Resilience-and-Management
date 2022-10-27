import Head from 'next/head';
import { IIncident } from 'pages/admin';
import React from 'react';

type Props = {
    incidents: IIncident[];
    brgy: string;
};

export default function AdminDashboard({ incidents, brgy }: Props) {
    return <>
        <Head>
            <title> {brgy} Admin </title>
        </Head>
        {incidents.map((incident) =>
            <div key={incident._id}>
                <h1> {incident.description} </h1>
            </div>)}
    </>;
}