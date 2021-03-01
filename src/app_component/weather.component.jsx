import React from "react";
import Icon from "@mdi/react";
import Typography from "@material-ui/core/Typography";
import Grid from "@material-ui/core/Grid";

const Weather = (props) => {
    return (
        <Grid
            container
            direction="column"
            justify="flex-start"
            alignItems="center"
        >
            <Grid item xs={12}>
                <Typography
                    variant="headline"
                    style={{ color: "white" }}
                    component="h1"
                >
                    {props.city}
                </Typography>

                <Typography component="h5">
                    <Icon
                        style={{ color: "white" }}
                        size={9}
                        path={props.weatherIcon}
                    />
                </Typography>
                {props.tempCelius ? (
                    <Typography
                        variant="headline"
                        component="h1"
                        style={{ color: "white" }}
                        className="py-1"
                    >
                        Temp {props.tempCelius}&deg;
                    </Typography>
                ) : null}

                <Typography
                    variant="headline"
                    style={{ color: "white" }}
                    component="h2"
                    className="py-2"
                >
                    {minmaxTemp(props.tempMin, props.tempMax)}
                </Typography>

                <Typography
                    variant="headline"
                    style={{ color: "white" }}
                    component="h1"
                    className="py-3"
                >
                    {props.description}
                </Typography>
            </Grid>
        </Grid>
    );
};

function minmaxTemp(min, max) {
    if (min && max) {
        return (
            <Typography variant="headline" component="h3">
                Min <span className="py-4">{min}&deg; </span>
                Max <span className="py-5">{max}&deg; </span>
            </Typography>
        );
    }
}

export default Weather;
