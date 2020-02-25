import React from 'react'

const Painting = ({title, image, date, artist_name}) => {
  return(
    <li>
      <h2>{title}</h2>
      { /* Only render h3s containing the date and artist_name if we have been passed values for those props */ }
      { date && <h3>{date}</h3>}
      { artist_name && <h3>by {artist_name}</h3>}
      { /* This syntax is a shortcut for a ternary operator that will return null as one of the options i.e. it's the same as saying:

        date ? <h3>{date}</h3> : null
        artist_name ? <h3>{artist_name}</h3> : null

      */}
      <img src={image}/>
    </li>
  )
}

export default Painting
