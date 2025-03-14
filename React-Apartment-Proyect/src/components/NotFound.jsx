import React from 'react'
import { Link } from "react-router-dom";
export const NotFound = () => {
  return (
    <div>
    <div>
      404 NotFound.... You got lost :(
    </div>
      <Link to="/">Go Back Home</Link>
    </div>
  )
}

export default NotFound