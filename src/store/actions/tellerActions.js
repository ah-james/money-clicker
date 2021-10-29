export const fetchTellers = () => {
    return async dispatch => {
        try {
            let response = await fetch('https://money-clicker-195e4-default-rtdb.firebaseio.com/tellers.json')
            if (!response.ok) {
                throw new Error('Something Went Wrong!')
            }

            const json = await response.json()
            dispatch({type: 'GET_TELLERS', payload: json})

        } catch (error) {
            throw error
        }
    }
}