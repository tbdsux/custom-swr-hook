import { Get200Response } from '../typings/response'
import useBaseSWRHook from './useBaseSWRHook'

const useGet200 = (endpoint?: string) => {
  return useBaseSWRHook<Get200Response>({
    url: '/200',
    endpoint: 'https://httpstat.us/'
  })
}

export default useGet200
