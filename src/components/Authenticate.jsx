import { useState } from "react"

function Authenticate({token}) {
    const [successMessage, setSuccessMessage] = useState(null)
    const [username, setUsername] = useState(null)
    const [error, setError] = useState(null)

    async function handleClick() {
        try{
            const response = await fetch(
				"https://fsa-jwt-practice.herokuapp.com/authenticate",
				{
					method: "GET",
					headers: {
						"Content-type": "application/json",
						Authorization: `Bearer ${token}`
					},
				}
			)
            const result = await response.json()
            setSuccessMessage(result.message)
            setUsername(result.data.username)
        }catch(error){
            setError(error.message)
        }
    }

    return(
        <>
        <h2>Authenticate</h2>
        {successMessage && <div><p>Message: {successMessage}</p> <p>Username: {username}</p></div>}
        {error && <p>Error message: {error}</p>}
        <button onClick={handleClick}>Authenticate Token</button>
        </>
    )
}

export default Authenticate