import WbSunny from "@material-ui/icons/WbSunny";
import React from "react";


const Weather = ()=> {
    return (
        <div className="container">
            <div className="cards">
                <h1>Tampere</h1>
                <h5 className="py-4">          
                ei ainakaan {<WbSunny/>}, perkele 
                </h5>
                <h1 className="py-2">
                    -69&deg;
                </h1>
            </div>
        </div>
    );
};

export default Weather;