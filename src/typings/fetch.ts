import FetchError from '../lib/error'

export interface FetchResult<T> {
  data?: T
  isError: boolean
  error?: FetchError
}
