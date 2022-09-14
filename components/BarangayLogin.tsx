import { Button, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, TextField } from "@mui/material";
import { FormEvent, useState } from "react";

export default function BarangayLogin() {
    const [brgy, setBrgy] = useState("");
    const handleChange = (event: SelectChangeEvent) => {
        const value = event.target.value;
        setBrgy(value);
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log(event);
    };

    return <form onSubmit={handleSubmit}>
        <Stack spacing={3}>
            <FormControl fullWidth>
                <InputLabel id="brgy-select"> Select barangay </InputLabel>
                <Select
                    labelId="brgy-select"
                    id="brgy-select"
                    value={brgy}
                    label="Select barangay"
                    onChange={handleChange}
                >
                    <MenuItem value={"alabang"}> Alabang </MenuItem>
                    <MenuItem value={"bayanin"}> Bayanin </MenuItem>
                    <MenuItem value={"putatan"}> Putatan </MenuItem>
                </Select>
            </FormControl>
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
