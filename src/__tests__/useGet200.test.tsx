import { renderHook } from '@testing-library/react-hooks'
import { useGet200 } from '../hooks'
import CustomWrapper from './wrapper'

describe('useGet200', () => {
  it('should fetch with 200 ok response', async () => {
    const { result, waitForNextUpdate } = renderHook(
      () => useGet200('https://httpstat.us'),
      { wrapper: CustomWrapper }
    )

    await waitForNextUpdate({ timeout: 5000 })

    expect(result.current.data != null)
    expect(!result.current.isError)
    expect(result.current.error == null)

    expect(result.current.data?.code === 200)
    expect(result.current.data?.description === 'OK')
  })
})
