import * as React from 'react';
import CssBaseline from '@mui/material/CssBaseline';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import TextField from '@mui/material/TextField';
import { RiSendPlaneFill } from "react-icons/ri";
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';


const styleContainer = {
    background: 'linear-gradient(0deg, #131217, #2C3039)',
    height: '90vh',
};

const styleBoxSendMessage = {
    width: '100%',
    height: '10vh',
    margin: '0',
    padding: '10px'
}

const styleBoxMessage = {
    width: '100%',
    height: '80vh',
    margin: '0',
    overflow: 'auto',
}

const InputMessage = {
    borderRadius: '5px',
    color: 'black',
    background: 'white',
}
const InputSend = {
    align: 'center'
}

export default function ChatComBot() {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container style={styleContainer}>
                <Box style={styleBoxMessage}>
                    <Container sx={{ padding: '10px 0px 10px 0px', textAlign: 'right' }}>
                        <Box sx={{ color: 'black', fontWeight: '600', maxWidth: '100%', height: 'auto', bgcolor: '#00BBC9', borderRadius: '5px 5px 0px 5px', padding: '15px' }}>
                            Jubileu das Antas
                        </Box>
                    </Container>
                    <Container sx={{ color: 'White', fontWeight: '400', maxWidth: '100%', height: 'auto',  padding: '15px' }}>
                    O Jubileu é um Jubileu das antas
                    </Container>
                </Box>
                <Box sx={{ flexGrow: 1 }} style={styleBoxSendMessage}>
                    <Grid container spacing={1}>
                        <Grid xs={6} md={11}>
                            <TextField style={InputMessage} fullWidth label="Escreva sua mensagem..." />
                        </Grid>
                        <Grid xs={6} md={1} style={InputSend}>

                            <Button sx={{
                                width: '90%',
                                height: '100%',
                                margin: '0px 5px 0px 5px',
                            }} variant="contained">
                                <RiSendPlaneFill size='30px' />
                            </Button>
                        </Grid>
                    </Grid>
                </Box>
            </Container>
        </React.Fragment>
    );
}