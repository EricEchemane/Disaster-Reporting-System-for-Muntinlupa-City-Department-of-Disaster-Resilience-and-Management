import { Button, Container, Group, Select, Stack, Textarea, TextInput, Title } from '@mantine/core';
import Head from 'next/head';
import muntiLogo from "../public/muntinlupa-logo.png";
import ddrmLogo from "../public/ddrm.png";
import Image from 'next/image';
import { useForm } from '@mantine/form';
import { FormEvent } from 'react';
import barangays from 'lib/barangays';
import DropZoneComponent from 'components/DropZone';
import { FileWithPath } from '@mantine/dropzone';

export default function ReportIncidentPage() {
    const form = useForm({
        initialValues: {
            brgy: '',
            fullName: '',
            address: '',
            contactNumber: '',
            incidentPhoto: '',
            reportBody: '',
        },
        validate: {
            brgy: value => value.trim() !== '' ? null : 'Please select a barangay',
            incidentPhoto: value => value !== '' ? null : 'Please attach a photo of the incident',
        }
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();
        const errors = form.validate();
        if (errors.hasErrors) return;
    };

    const handleDrop = (files: FileWithPath[]) => {
        const file = files[0];
        if (!file) return;
        form.setFieldValue('incidentPhoto', URL.createObjectURL(file));
    };

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

        <Container size={'sm'} py={'xl'}>
            <form onSubmit={handleSubmit}>
                <Stack spacing={'lg'}>
                    <Select
                        error={form.errors.brgy}
                        required
                        size={'lg'}
                        label='Barangay Location'
                        placeholder='Your barangay location'
                        value={form.values.brgy}
                        onChange={(brgy: string) => form.setFieldValue('brgy', brgy)}
                        data={barangays.map(brgy => ({ value: brgy, label: brgy }))} />
                    <TextInput
                        size={'lg'}
                        required
                        minLength={5}
                        {...form.getInputProps('fullName')}
                        label={'Full Name'}
                        placeholder={'Your full name here'} />
                    <TextInput
                        size={'lg'}
                        required
                        pattern='^((09|\+639)|(|\d{2}|\d{3}))(|\s)(\d{9}|\d{7})$'
                        {...form.getInputProps('contactNumber')}
                        label={'Contact Number'}
                        placeholder={'Your contact number'} />
                    <TextInput
                        size={'lg'}
                        required
                        {...form.getInputProps('address')}
                        label={'Address'}
                        placeholder={'Your address here'} />
                    <Textarea
                        required
                        size='lg'
                        minLength={10}
                        {...form.getInputProps('reportBody')}
                        label='Describe the incident here'
                        placeholder='Describe the incident here' />
                    <DropZoneComponent
                        error={form.errors.incidentPhoto?.toString()}
                        onDrop={handleDrop}
                        imgsrc={form.values.incidentPhoto} />

                    <Button
                        size='lg'
                        type='submit'
                        mt={'3rem'}
                        fullWidth>
                        Submit
                    </Button>
                </Stack>
            </form>
        </Container>
    </>;
}