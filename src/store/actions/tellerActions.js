export const fetchTellers = () => {
    return async dispatch => {
        try {
            const response = await fetch('https://money-clicker-195e4-default-rtdb.firebaseio.com/tellers')
            if (!response.ok) {
                throw new Error('Something Went Wrong!')
            }

            const json = await response.json()
            dispatch({type: 'GET_TELLERS', payload: json['data']})

        } catch (error) {
            throw error
        }
    }
}