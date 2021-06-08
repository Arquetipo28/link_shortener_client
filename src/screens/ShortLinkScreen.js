import React, { useState } from 'react';
import { createLink } from '../services/links_service';


const ShortLinkScreen = () => {
  const [state, setState] = useState({})

  const onChange = (event) => {
    const fieldValue = event.target.value
    setState({ link: fieldValue })
  }

  const onClick = async (event) => {
    const result = await createLink(state.link)
    const newState = { shortedLink: result.shorted_link, ...state } 
    setState(newState)
  }

  return (
    <>
      <input type='text' placeholder='Link Shortener' onChange={onChange} />
      <button onClick={onClick}>Create Short Link</button>
      <br />
      { state.shortedLink && <span>{ state.shortedLink }</span> }
    </>
  )
}

export default ShortLinkScreen;
