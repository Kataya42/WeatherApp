import React from "react";
import Icon from "@mdi/react"
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Card from "@material-ui/core/Card"


const Weather = (props) =>
{

    return (
        
        <Grid
        container
        direction="column"
        justify="flex-start"
        alignItems="center"
        >   
            <Grid item xs={12}>
                <Card style={{backgroundColor: "#8D9AA7"}}>
                <Typography variant="headline" component="h1">
                {props.city}
                </Typography>
     
                <Typography component="h5">
                    <Icon path={props.weatherIcon}
                    size={10}
                    />
                </Typography>
                    {props.tempCelius ? (

                <Typography variant="headline" component="h1" className="py-1">Temp {props.tempCelius}&deg;
                </Typography> ) : null}
                

                <Typography variant="headline" component="h1" className="py-2"> 
                   

                    {minmaxTemp(props.tempMin,props.tempMax)}
              
                    
                </Typography>

                <Typography variant="headline" component="h1" className="py-3">
                    {props.description}
                </Typography>
                </Card>
            </Grid>                            
        </Grid>
    );
};

function minmaxTemp(min, max)
{
    if (min && max)
    {
        return (
            <Typography variant="headline" component="h3">
                Min <span className="py-4">{min}&deg; </span>
                Max <span className="py-5">{max}&deg; </span>
            </Typography>
        );
    }
}

export default Weather;