import React from 'react'
import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

const AdminSite = ({isAdmin}) => {
    const navigate = useNavigate();

    useEffect(() => {
        if(!isAdmin) {
            navigate("/login")
        }
    },[])
    


  return (
    <div>AdminSite</div>
  )
}

export default AdminSite