
import axios from 'react'

export const addUsers = () =>{
    return(dispatch) => {
        axios.post("/auth/user/signup", [UserSignup], userSignUp)
        .then(response =>{
            console.log(response);
            dispatch({
                type: 'ADD_USERS',
                payload: response.data
            })
            .catch(error =>{
                console.log(error)
            })
        })
    }
}