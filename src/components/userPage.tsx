import React from 'react'
import { useParams } from 'react-router-dom'
import { supabase } from '../supabaseClient'


 function UserPage () {
    const { id } = useParams<{ id: string }>()
     const handleClick = async () => {
        const { data: { user } } = await supabase.auth.getUser()
        alert(user?.email)
     }

   
    
    return (
        <div>
           <p>welcome to your house { id }</p> 
            <button onClick={handleClick}> click </button>
            
            <button className="button block" type="button" onClick={() => supabase.auth.signOut()}>
          Sign Out
        </button>

        </div>
    )
}

export default UserPage
