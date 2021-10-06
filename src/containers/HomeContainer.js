import React, { useState } from 'react'
import DollarButton from '../components/DollarButton'

const HomeContainer = props => {
    const [count, setCount] = useState(0)

    const imageClick = () => {
      setCount(count + 1)
    }

    return (
        <div>
            <p>You have {count} dollars in the bank</p>
            <DollarButton imageClick={imageClick} />
        </div>
    )
}

export default HomeContainer