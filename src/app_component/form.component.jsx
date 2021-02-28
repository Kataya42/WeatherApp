import React from "react";
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Alert from "@material-ui/lab/Alert";
import {createMuiTheme, ThemeProvider } from "@material-ui/core/styles"




const useStyles = makeStyles((theme) => (
{

    form:
    {
        width: '100%',
        margin: theme.spacing(3, 0, 0),
        padding: "30 30px",

    },
    submit:
    {
        background: "linear-gradient(45deg, #FF6B8B, #FF8E53)",
        margin: theme.spacing(1, 0, 0),
        textTransform: "none",
        width: "89%",
        minHeight: "20ox",
        maxHeight: "40px",

    },
    textField:
    {
        color: "black",
        background: "transparent",
        borderRadius: theme.shape.borderRadius,
        borderColor: theme.palette.primary.main

    }

}));

const theme = createMuiTheme(
{
    palette:
    {
        type: 'light',
        primary:
        {
            main: '#FF8E53',
        },
        secondary:
        {
            main: '#FF6B8B',
        },
    },
});


const Form = props =>
{
    const classes = useStyles();
    return (
        <Container component="main" maxWidth="sm">

            <div>
                {props.error ? error() : null}
            </div>

            <ThemeProvider theme={theme}>

            <form className={classes.form} onSubmit={props.loadweather}>

                <Grid 
                container 
                spacing={3}
                alignItems="center"
                justify="center"
                >
                    <Grid item xs={12} sm= {6}>

                            <TextField 
                            variant="outlined"
                            type="text"
                            className={classes.textField}
                            name="city" 
                            autoComplete="off"
                            placeholder= "City"
                            />

                            </Grid> 
                            <Grid item xs={12} sm={6}>
                            <TextField
                            variant="outlined"
                            type="text" 
                            className={classes.textField}
                            name="country" 
                            autoComplete="off"
                            placeholder= "Country"   
                            
                            />                      
                            </Grid> 


                                <Button 
                                fullWidth
                                size= "large"
                                type="submit"                          
                                variant="contained"
                                color= "primary"
                                className={classes.submit}>
                                
                                    Get Weather
                                    
                                </Button>

                         

                        
                </Grid>    
            </form>
            </ThemeProvider>
        </Container>
    );
};

function error()
{
    return (
        <Alert 
        severity="warning"
        >
            Please Enter correct City and Country
        </Alert>
    )
}

export default Form;