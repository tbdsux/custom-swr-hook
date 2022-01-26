import useSWR from 'swr'
import urljoin from 'url-join'
import { useCustomSWR } from '../component/provider'
import fetcher from '../lib/fetcher'
import { FetchResult } from '../typings/fetch'

interface useBaseSWRHookProps {
  endpoint?: string
  url: string
}

const useBaseSWRHook = <T>(
  props?: useBaseSWRHookProps | null
): FetchResult<T> => {
  const { endpoint: contextEndpoint } = useCustomSWR()
  let { endpoint, url } = props ?? { url: '' }

  endpoint = endpoint ?? contextEndpoint

  if (endpoint == null) {
    throw new Error('No endpoint set.')
  }

  const { data, error } = useSWR<T>(urljoin(endpoint, url), fetcher)

  let isError = false
  if (error != null) {
    isError = true
  }

  return { data, isError, error }
}

export default useBaseSWRHook
