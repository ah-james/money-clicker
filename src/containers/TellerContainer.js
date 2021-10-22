import React, { useCallback, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import * as tellerActions from '../store/actions/tellerActions'
import TellerButton from '../components/TellerButton'

const TellerContainer = props => {

    const tellers = useSelector(state => state.tellers)
    const dispatch = useDispatch()

    const loadPage = useCallback(async () => {
        try {
            await dispatch(tellerActions.fetchTellers())
        } catch (error) {
            console.log(error.message)
        }
    }, [dispatch])

    useEffect(() => {
        loadPage()
    }, [loadPage])

    return(
        <div>
            <p>These are your Tellers:</p>
            {tellers.map((teller) => {
                return <TellerButton name={teller} />
            })}
        </div>
    )
}

export default TellerContainer