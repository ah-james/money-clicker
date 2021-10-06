import React from "react";

const DollarButton = props => {

    return (
        <div>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg'} alt="logo" onClick={() => props.imageClick()} />
        </div>
    )
}

export default DollarButton