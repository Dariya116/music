import React from "react"
import ContentLoaderRight from "react-content-loader"

const MyLoaderRight = (props) => (
   
  <ContentLoaderRight 
    speed={2}
    width={1500}
    height={1500}
    viewBox="0 0 1500 1500"
    backgroundColor="#5e5e5e"
    foregroundColor="#ecebeb"
    {...props}
  >
     

      <rect  x="50" y="250" rx="10" ry="10" width="260" height="160" />
      <rect x="50" y="450" rx="10" ry="10" width="260" height="160" />
      <rect x="50" y="650" rx="10" ry="10" width="260" height="160" />

    

  </ContentLoaderRight>
)

export default MyLoaderRight




