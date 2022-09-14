import { Stack } from "@mui/material";
import { FormControl, InputLabel, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import { Container } from "@mui/material";
import AdminLogin from "components/AdminLogin";
import BarangayLogin from "components/BarangayLogin";
import Header from "components/shared/Header";
import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [role, setRole] = useState<"brgy" | "admin">("brgy");
  const handleChange = (event: SelectChangeEvent) => {
    const value = event.target.value;
    if (value !== 'brgy' && value !== 'admin') return;
    setRole(value);
  };
  return <>
    <Head>
      <title>Disaster Resilience and Management System of Muntinlupa City</title>
    </Head>

    <Container style={{ paddingTop: '1rem' }}>
      <Header />
      <Stack
        py='2rem' m='auto'
        spacing={5}
        alignItems="stretch"
        style={{ width: 'min(100%, 450px)' }}>

        <FormControl fullWidth>
          <InputLabel id="role-select">Role</InputLabel>
          <Select
            labelId="role-select"
            id="role-select"
            value={role}
            label="role"
            onChange={handleChange}
          >
            <MenuItem value={"brgy"}> Barangay </MenuItem>
            <MenuItem value={"admin"}> Admin </MenuItem>
          </Select>
        </FormControl>

        {role === 'admin' && <AdminLogin />}
        {role === 'brgy' && <BarangayLogin />}

      </Stack>
    </Container>
  </>;
}
