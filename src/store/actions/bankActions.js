export const increaseBank = (bank) => {
    return async dispatch => {
        try {
            let response = await fetch('https://money-clicker-195e4-default-rtdb.firebaseio.com/bank.json', {
                method: 'PATCH',
                body: JSON.stringify({bank: bank + 1}),
                headers: {'Content-Type': 'application/json', 'Accept': 'application/json'}
            })

            if (!response.ok) {
                throw new Error('something went wrong!')
            }

            let json = await response.json()
            dispatch({type: 'INCREMENT', payload: json['data']})
        } catch (error) {
            throw error
        }
    }
}