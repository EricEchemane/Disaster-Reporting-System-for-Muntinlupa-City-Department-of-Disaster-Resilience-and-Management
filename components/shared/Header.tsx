import { Avatar, Stack, Typography } from "@mui/material";

const logoSize = 100;

export default function Header() {
    return <>
        <Stack alignItems="center">
            <Avatar
                alt="muntinlupa logo"
                src="/docs/muntinlupa-logo.png"
                sx={{ width: logoSize, height: logoSize }} />
            <Typography variant="h4" align="center"> Disaster Resilience and Management System of Muntinlupa City </Typography>
        </Stack>
    </>;
}
