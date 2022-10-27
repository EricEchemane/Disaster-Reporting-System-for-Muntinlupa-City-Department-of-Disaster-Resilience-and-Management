import React, { FormEvent, useState } from 'react';
import styles from "../styles/admin.module.css";
import { Button, TextInput, Title } from '@mantine/core';
import Head from 'next/head';
import Http from 'http/adapter';

export default function Admin() {
    const [loading, setLoading] = useState(true);

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();
        const payload = { username, password };
        Http.post('/api/login', payload, {
            loadingToggler: setLoading,
            onFail: (err) => console.log(err),
            onSuccess: (res) => console.log(res),
        });
    };

    return <>
        <Head>
            <title> Brgy Admin </title>
        </Head>

        <form className={styles.form} onSubmit={onSubmit}>
            <Title order={2}>
                Admin Login
            </Title>
            <TextInput
                required
                size='lg'
                label="Username"
                placeholder='Username'
                onChange={(e) => setUsername(e.currentTarget.value)}
                value={username} />
            <TextInput
                required
                type={'password'}
                size='lg'
                label="Password"
                placeholder='Password'
                onChange={(e) => setPassword(e.currentTarget.value)}
                value={password} />
            <Button type='submit' size='lg' loading={loading}>
                {loading ? 'Logging in' : 'Login'}
            </Button>
        </form>
    </>;
}
