import React, { useEffect, useState } from 'react';

// Custom Services
import { topLinks as getTopLinks } from '../services/links_service';

const TopLiniksScreen = () => {
  const [topLinks, setTopLinks] = useState([])
  useEffect(() => {
    async function getLinks() {
      const result = await getTopLinks()
      
      console.log(result)
      setTopLinks(result)
    }

    getLinks()
  }, [])

  return (
    <>
      { topLinks.map((e, i) => {
        return ([
          <span key={i}>{e.original_link}</span>,
          <br/>
        ])
      })
      }
    </>
  )
}

export default TopLiniksScreen;
