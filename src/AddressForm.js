import React from 'react'
import { InputLabel, Select, MenuItem, Button, Grid, Typography } from '@mui/material'
import { useForm, FormProvider } from 'react-hook-form'
import FormInput from './CoustomTextField'
import { Link } from 'react-router-dom';
import { useHistory } from 'react-router';
const AddressForm = () => {
    const methods = useForm();
    const history = useHistory();
    return (
        <>
            <Typography variant="h6" gutterBottom>Shipping Address</Typography>
            <FormProvider {...methods}>
                <form onSubmit=" ">
                    <Grid container spacing={3}>

                        <FormInput label="First Name" name="firstname" required />
                        <FormInput label="Last Name" name="lastname" required />
                        <FormInput label="Address" name="address" required />
                        <FormInput label="Phone" name="phone" required />
                        <FormInput label="City" name="city" required />
                        <FormInput label="Pin Code" name="pincode" required />
                    </Grid>
                    <br />
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <Button component={Link} variant="outlined" to="/cart">Back to Cart</Button>
                        <Button type="submit" variant="contained" color="primary">Next</Button>
                    </div>
                </form>
            </FormProvider>
        </>
    )
}

export default AddressForm
