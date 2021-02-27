import React from "react";
import Icon from "@mdi/react"


const Weather = (props)=> {
    return (
        <div className="container">
            <div className="cards">
                <h1>
                    {props.city}, {props.country}
                </h1>

                <h5 className="py-4">          
                    <Icon path={props.weatherIcon}
                    size={4}
                    />
                </h5>

                <h1 className="py-2">
                     {props.tempCelius}&deg;
                </h1>

                <h1 className="py-2">
                    {minmaxTemp(props.tempMin,props.tempMax)}
                </h1>

                <h4 className="py-3">
                    {props.description}
                </h4>
            </div>
        </div>
    );
};

function minmaxTemp(min,max){
    return(
        <h3>
            <span className="px-4">{min}&deg;</span>
            <span className="px-4">{max}&deg;</span>
        </h3>
    );
}

export default Weather;