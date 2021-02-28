import React from "react";
import Icon from "@mdi/react"
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';

const Weather = (props) =>
{
    return (
        <Container component="main" maxWidth="xs" padding="6">
                <Typography component="h1">
                    " "
                </Typography>
                
                <Typography component="h1">
                {props.city}
                </Typography>
     
                <Typography component="h5">
                    <Icon path={props.weatherIcon}
                    size={4}
                    />
                </Typography>
                    {props.tempCelius ? (

                <Typography component="h1" className="py-1">Temp {props.tempCelius}&deg;
                </Typography> ) : null}
                

                <Typography component="h1" className="py-2"> 
                   

                    {minmaxTemp(props.tempMin,props.tempMax)}
              
                    
                </Typography>

                <Typography component="h4" className="py-3">
                    {props.description}
                </Typography>

        </Container>
    );
};

function minmaxTemp(min, max)
{
    if (min && max)
    {
        return (
            <Typography component="h3">
                Min <span className="py-4">{min}&deg; </span>
                Max <span className="py-5">{max}&deg; </span>
            </Typography>
        );
    }
}

export default Weather;