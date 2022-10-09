import { Avatar, Button, Stack, TextField, Typography } from '@mui/material';
import useUser from 'hooks/useUser';
import React, { FormEvent, useState } from 'react';
import { signIn, useSession } from "next-auth/react";
import useLoadingIndicator from 'hooks/with_provider/useLoadingIndicator';
import Http from 'utils/http';
import useNotification from 'hooks/with_provider/useNotification';
import Router from 'next/router';

export default function SignIn() {
    const [password, setPassword] = useState("");
    const { error } = useUser({ whenFoundRedirectTo: "/" });
    const { data: session } = useSession();
    const loadingIndicator = useLoadingIndicator();
    const notify = useNotification();

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        loadingIndicator.show();
        await Http.post("/api/user/sign-in", { password }, {
            onFail: message => notify(message, "error"),
            onSuccess: () => Router.replace("/")
        });
        loadingIndicator.hide();
    };

    if (error?.code === 404) return (
        <Stack>
            <Typography variant='h6'>
                {session?.user?.name}
            </Typography>
            <Typography variant='h6'>
                {session?.user?.email}
            </Typography>
            <Avatar alt={session?.user?.name || ""} src={session?.user?.image || ""} />
            <form onSubmit={handleSubmit}>
                <TextField
                    type="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} />
                <Button type="submit" variant="contained"> Sign in </Button>
            </form>
        </Stack>
    );
    if (error?.code === 401) return (
        <Button onClick={() => signIn("google")}>
            Sign in with google
        </Button>
    );

    return <></>;
}
