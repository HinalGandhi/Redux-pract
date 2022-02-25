import React from 'react'

export const Navbar = () => {
  return (
    <header>
       <table className="table table-borderless mb-0">
    <thead>
      <tr className='d-flex'>
        <th scope="col" style={{width:"24rem"}}>Name</th>
        <th scope="col" style={{width:"14rem"}}>Status</th>
        <th scope="col">Access</th>
        <th scope="col"></th>
      </tr>
    </thead>
  </table>
    </header>
  )
}
