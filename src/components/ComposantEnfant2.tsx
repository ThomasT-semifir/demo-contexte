import React from 'react'
import { UserContext, userObject } from '../user-context'

export const ComposantEnfant2 = () => {

    const {user, setUser}: userObject = React.useContext(UserContext)

    return (
        <>
            <div>{user}</div>
            <button onClick={() => setUser("tutu")}>clic</button>
        </>
    )
}
