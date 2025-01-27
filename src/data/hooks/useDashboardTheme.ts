'use client'
import { useContext } from 'react'
import DashboardThemeContext from '../contexts/DashboardThemeContext'

const useDashboardTheme = () => useContext(DashboardThemeContext)
export default useDashboardTheme
