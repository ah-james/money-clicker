import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import DollarButton from '../components/DollarButton'

import { increaseBank } from '../store/actions/bankActions'

const HomeContainer = props => {
    const dispatch = useDispatch()
    const bank = useSelector(state => state.bank)

    const addDollar = async () => {
        // dispatch to bank
        await dispatch(increaseBank(bank))
    }

    return (
        <div>
            <p>You have {bank} dollars in the bank</p>
            <DollarButton imageClick={addDollar}/>
        </div>
    )
}

export default HomeContainer