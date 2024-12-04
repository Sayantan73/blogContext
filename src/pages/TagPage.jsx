import React from 'react'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'
import { Blogs } from '../components/Blogs'
import { Pagination } from '../components/Pagination'
import { Header } from '../components/Header'

export const TagPage = () => {
    const navigation = useNavigate()
    const location = useLocation()
    const tag = location.pathname.split("/").at(-1)
  return (
    <div>
        <Header/>
        <div>
            <button onClick={()=>{navigation(-1)}}>back</button>
            <h2>Blog Tagged <span>#{tag}</span></h2>
        </div>
        <Blogs/>
        <Pagination/>
    </div>
  )
}
