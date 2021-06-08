const createLink = async (original_link) => {
  const result = await fetch(
  'http://localhost:3000/links',
    {
      method: 'POST',
      body: JSON.stringify({ original_link }),
      headers: {
        'Content-Type': 'application/json'
      }
    }
  )

  return result.json()
}

const topLinks = async () => {
  const result = await fetch('http://localhost:3000/top')
  return result.json()
}

export {
  createLink,
  topLinks
}
