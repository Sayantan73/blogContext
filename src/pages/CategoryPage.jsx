import React from 'react'
import { Header } from '../components/Header'
import { Blogs } from '../components/Blogs'
import { Pagination } from '../components/Pagination'
import { useLocation, useNavigate, useNavigation } from 'react-router-dom'

export const CategoryPage = () => {
  const navigation = useNavigate()
  const location = useLocation()
  const category = location.pathname.split("/").at(-1)
return (
  <div>
      <Header/>
      <div>
          <button onClick={()=>{navigation(-1)}}>back</button>
          <h2>Blog Tagged <span>{category}</span></h2>
      </div>
      <Blogs/>
      <Pagination/>
  </div>
)
}
