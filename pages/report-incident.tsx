import { Container, Group, Title } from '@mantine/core';
import Head from 'next/head';
import muntiLogo from "../public/muntinlupa-logo.png";
import ddrmLogo from "../public/ddrm.png";
import Image from 'next/image';
import { useForm } from '@mantine/form';

export default function ReportIncidentPage() {
    const form = useForm({
        initialValues: {
            brgy: '',
            fullName: '',
            address: '',
            mobileNumber: '',
            incidentPhoto: '',
            reportBody: '',
            date: '',
        }
    });

    return <>
        <Head>
            <title> Report Incident </title>
        </Head>

        <Container py={'xl'} size={'md'}>
            <Group position={'center'}>
                <Image width={100} height={100} alt="muntinlupa logo" src={muntiLogo} />
                <Image width={100} height={100} alt="ddrm logo" src={ddrmLogo} />
            </Group>

            <Title order={2} align={'center'} mt={'md'}>
                Department of Disaster Resilience and Management
            </Title>
            <Title order={3} align={'center'} mt={'sm'} color={'blue'}>
                Report Incident
            </Title>
        </Container>
    </>;
}
