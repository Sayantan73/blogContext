import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import { Spinner } from './Spinner'
import { BlogDetails } from './BlogDetails'

export const Blogs = () => {
  // consuming data
  const { loading, posts } = useContext(AppContext)

  return (
    <div className='w-11/12 max-w-[670px] py-8 flex flex-col justify-center items-center gap-y-7 mt-[6px] mb-[70px]'>
      {
        loading ?

          (<Spinner />) :

          (
            posts.length === 0 ?
              (
                <div><p>No Post Found</p></div>
              ) :
              (
                posts.map((post) => (
                  <BlogDetails key={post.id} post={post}/>
                ))
              )
          )
      }
    </div>
  )
}
