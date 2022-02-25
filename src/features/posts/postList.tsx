import React from 'react'
import { useSelector } from 'react-redux'
import * as Icon from "react-feather";
import './post.css';
import { RootState } from '../../app/store'

export const PostsList = () => {
  const posts = useSelector((state: RootState) => state.posts)

  const renderedPosts = posts.map((post): JSX.Element => (
    <tr key={post.id} className='d-flex align-items-center'>
      <td className='d-flex userDetails'>
        <picture>

          <img
            className="profileImg img-fluid img-thumbnail rounded-circle p-0"
            src={post.avatar}
            alt="owner_avatar"
          />
        </picture>
        <div className='row align-content-center ms-0'>
          <p className="userName mb-0">
            {post.first_name}
          </p>
          <p className="userEmail text-secondary mb-0">{post.email}</p>
        </div>
      </td>
      <td className="" style={{ width: "14rem" }}>
        <select className="selectMenu form-select">
          <option value="Inactive">Inactive</option>
          <option value="Active">Active</option>
        </select>
      </td>
      <td className='' style={{ width: "10rem" }}>  <select className="selectMenu form-select">
          <option value="Inactive">Manager</option>
          <option value="Active">Read</option>
        </select></td>
      <td>
        <Icon.Trash2
          size={18}
          style={{ color: "rgba(0, 0, 0, 0.6)" }}
        />
      </td>

    </tr>

  ))

  return (
    <tbody className="container posts-list">
      {renderedPosts}
    </tbody>
  )
}