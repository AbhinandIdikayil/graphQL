import { useQuery } from '@apollo/client'
import React, { useEffect } from 'react'
import { GET_AUTHORS } from '../../graphql/graphql'


function Dashboard() {
    const { data, error, loading } = useQuery(GET_AUTHORS)

    useEffect(() => {
        console.log('recieved authors',data)
    },[data])

    return (
        <div>Dashboard</div>
    )
}

export default Dashboard