import { Button, Stack, TextField } from "@mui/material";
import { FormEvent } from "react";

export default function AdminLogin() {

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(event);
    };

    return <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
            <TextField
                required
                fullWidth
                id="username"
                label="Username"
                variant="filled" />
            <TextField
                required
                fullWidth
                type="password"
                id="password"
                label="Password"
                variant="filled" />
            <Button type="submit" fullWidth variant="contained" size='large'> Login </Button>
        </Stack>
    </form>;
}
