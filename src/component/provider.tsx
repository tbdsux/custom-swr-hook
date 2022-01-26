import { createContext, ReactNode, useContext } from 'react'

interface CustomSWRProviderProps {
  endpoint?: string
  children: ReactNode
}

interface CustomSWRContextProps {
  endpoint?: string
}

const CustomSWRContext = createContext<CustomSWRContextProps>({})

const CustomSWRProvider = ({ children, endpoint }: CustomSWRProviderProps) => {
  return (
    <CustomSWRContext.Provider value={{ endpoint }}>
      {children}
    </CustomSWRContext.Provider>
  )
}

export const useCustomSWR = () => {
  return useContext(CustomSWRContext)
}

export default CustomSWRProvider
