import React, { useContext, useEffect, useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'
import { Header } from '../components/Header'
import { BlogDetails } from '../components/BlogDetails'

export const BlogPage = () => {

  let baseUrl = `https://codehelp-apis.vercel.app/api/get-blog`


  const [blog, setBlog] = useState(null)
  const [relatedBlogs, setRelatedBlogs] = useState([])
  const location = useLocation()
  const navigation = useNavigate()
  const { setLoading, loading } = useContext(AppContext)

  const blogId = location.pathname.split("/").at(-1)

  async function fetchRelatedBlogs() {
    setLoading(true);
    let url = `${baseUrl}?blogId=${blogId}`
    try {
      const response = await fetch(url)
      const data = await response.json()
      setBlog(data.blog)
      setRelatedBlogs(data.relatedBlogs)
    } catch (error) {
      console.log("Error inside BlogPage.jsx", error.message);
      setBlog(null)
      setRelatedBlogs([])
    }
    setLoading(false)
  }

  useEffect(() => {
    if (blogId) {
      fetchRelatedBlogs()
    }
  }, [location.pathname])

  return (
    <div>
      <Header />
      <div>
        <button onClick={() => { navigation(-1) }}>back</button>
      </div>
      {
        loading ? <div><p>Loading...</p></div> :
          blog ? (<div>
            <BlogDetails post={blog} />
            <h2>Related Blogs</h2>
            {
              relatedBlogs.map((post) => (
                <div key={post.id}>
                  <BlogDetails post={post} />
                </div>
              ))
            }
          </div>) : (<div><p>No blogs found</p></div>)
      }
    </div>
  )
}
