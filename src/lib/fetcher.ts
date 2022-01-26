import fetch from 'cross-fetch'
import FetchError from './error'

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: 'GET',
    headers: {
      accept: 'application/json'
    }
  })

  const data = await res.json()

  if (!res.ok) {
    // should change this one
    throw new FetchError(res.statusText, res.status)
  }

  return data
}

export default fetcher
