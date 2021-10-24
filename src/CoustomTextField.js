import React from 'react'
import { TextField, Grid } from "@mui/material"
import { useFormContext, Controller } from 'react-hook-form'

const FormInput = ({ name, label, required }) => {
    const { control } = useFormContext();
    return (
        <>
            <Grid item xs={12} sm={6}>
                <Controller as={TextField} name={name} label={label} required={required} fullWidth control={control} render={({ field }) => (
                    <TextField
                        fullWidth
                        label={label}
                        required
                        variant="filled"
                    />
                )} />
            </Grid>
        </>
    )
}

export default FormInput
