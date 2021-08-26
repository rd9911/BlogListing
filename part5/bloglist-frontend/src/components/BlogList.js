import React from 'react'
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const BlogList = () => {
  const blogs = useSelector(state => state.blogs)

  return (
    <div>
      <div>
        <h2>blogs</h2>
        {console.log(blogs)}
        {blogs.sort((a, b) =>  b.likes - a.likes).map(blog =>
          <div key={blog.id}><Link to={`blog-list/${blog.id}`}>{blog.title}</Link></div>
        )}
      </div>
    </div>
  )
}

export default BlogList