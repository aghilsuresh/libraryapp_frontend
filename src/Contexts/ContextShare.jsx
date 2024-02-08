import React, { createContext, useState } from 'react'



export const addblogResponseContext=createContext()

export const editBookResponseContext = createContext()

export const logoutContext=createContext()

function ContextShare({children}) {
  
    const [addBlogResponse, setAddBlogResponse] = useState({})

    const [editBookResponse, setEditBookResponse]=useState({})

    const [logout,setLogout]=useState(false)

  return (
    <>
      <addblogResponseContext.Provider value={{addBlogResponse, setAddBlogResponse}}> <editBookResponseContext.Provider value={{editBookResponse, setEditBookResponse}}><logoutContext.Provider value={{logout,setLogout}} >{children}</logoutContext.Provider>
      </editBookResponseContext.Provider>
      </addblogResponseContext.Provider>


    </>
  )
}

export default ContextShare