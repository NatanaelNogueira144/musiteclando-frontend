'use client'
import { useContext } from 'react'
import UserContext from '../contexts/UserContext'

const useAuth = () => useContext(UserContext)
export default useAuth
