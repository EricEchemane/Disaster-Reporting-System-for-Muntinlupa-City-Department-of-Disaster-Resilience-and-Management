import { Button, Stack, TextField } from "@mui/material";
import useForm from "hooks/useForm";
import HttpAdapter from "http_adapters/http-adapter-interface";
import useHttpAdapter from "http_adapters/useHttpAdapter";
import { FormEvent } from "react";

export default function AdminLogin() {
    const login = useHttpAdapter(new HttpAdapter('/api/login', 'POST'), {
        onSuccess: console.log,
        onFailed: console.log,
    });

    const { values, handleChange } = useForm({
        username: '',
        password: '',
        userType: 'admin'
    });

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        login.execute({ payload: values });
    };

    return <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
            <TextField
                value={values.username}
                onChange={handleChange}
                required
                fullWidth
                id="username"
                name="username"
                label="Username"
                variant="filled" />
            <TextField
                value={values.password}
                onChange={handleChange}
                required
                fullWidth
                type="password"
                name="password"
                id="password"
                label="Password"
                variant="filled" />
            <Button type="submit" fullWidth variant="contained" size='large'> Login </Button>
        </Stack>
    </form>;
}
