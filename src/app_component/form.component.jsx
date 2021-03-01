import React from "react";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Alert from "@material-ui/lab/Alert";
import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
    form: {
        margin: theme.spacing(5, 0, 0),
    },
    submit: {
        color: "white",
        background: "linear-gradient(45deg, #830024, #8e3313)",
        margin: theme.spacing(1, 1, 5),
        textTransform: "none",
        width: "50%",
        fontWeight: "bold",
    },
    textField: {
        background: "transparent",
        borderRadius: theme.shape.borderRadius,
        margin: theme.spacing(1, 1, 1),
        width: "50%",
    },
    input: {
        "&::placeholder": {
            color: "white",
        },
        color: "white",
    },
}));

const theme = createMuiTheme({
    palette: {
        type: "dark",
        primary: {
            main: "#FF8E53",
        },
        secondary: {
            main: "#FF6B8B",
        },
    },
});

const Form = (props) => {
    const classes = useStyles();
    return (
        <Container component="main">
            <div>{props.error ? error() : null}</div>

            <form className={classes.form} onSubmit={props.loadweather}>
                <Grid
                    container
                    item
                    xs={12}
                    direction="column"
                    justify="flex-start"
                    alignItems="center"
                >
                    <ThemeProvider theme={theme}>
                        <TextField
                            label="city"
                            variant="outlined"
                            type="text"
                            className={classes.textField}
                            name="city"
                            autoComplete="off"
                            placeholder="City"
                            InputProps={{
                                classes: { input: classes.input },
                            }}
                        />

                        <TextField
                            label="country"
                            variant="outlined"
                            type="text"
                            className={classes.textField}
                            name="country"
                            autoComplete="off"
                            placeholder="Country"
                            InputProps={{
                                classes: { input: classes.input },
                            }}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            size="large"
                            className={classes.submit}
                        >
                            Get Weather
                        </Button>
                    </ThemeProvider>
                </Grid>
            </form>
        </Container>
    );
};

function error() {
    return (
        <Alert severity="warning">Please Enter correct City and Country</Alert>
    );
}

export default Form;
