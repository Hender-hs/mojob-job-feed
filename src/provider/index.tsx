import { ReactNode }  from 'react'
import { JobsProvider }         from './jobs'

interface ProviderProps {
  'children': ReactNode
}

export const Providers = ({children}: ProviderProps) => (
  <JobsProvider>
    {children}
  </JobsProvider>
)