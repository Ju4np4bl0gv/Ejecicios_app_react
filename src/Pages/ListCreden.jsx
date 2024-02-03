import React, { useContext } from 'react'
import { CredencialesContext } from '../Context/CredencialesContext'

export const ListCreden = () => {

    const {listCredenciales} = useContext(CredencialesContext)

const {email, password}=listCredenciales
  return (
    <>
    <table className='table'>
        <thead>
            <tr>
                <th>Email</th>
                <th>Password</th>
            </tr>
        </thead>
        <tbody>
            <tr>
                <td>{email}</td>
                <td>{password}</td>
            </tr>
        </tbody>
    </table>
    </>
  )
}
