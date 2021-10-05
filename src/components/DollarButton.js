import React, { useState } from "react";

const DollarButton = props => {
    const [count, setCount] = useState(0)

    const imageClick = () => {
      setCount(count + 1)
    }

    return (
        <div>
            <p>You have {count} dollars in the bank</p>
            <img src={'https://upload.wikimedia.org/wikipedia/commons/2/23/US_one_dollar_bill%2C_obverse%2C_series_2009.jpg'} alt="logo" onClick={() => imageClick()} />
        </div>
    )
}

export default DollarButton