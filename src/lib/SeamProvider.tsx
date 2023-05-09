'use client'

import { QueryClient, QueryClientProvider } from '@tanstack/react-query'
import {
  createContext,
  type PropsWithChildren,
  useContext,
  useRef,
} from 'react'
import type { Seam, SeamClientOptions } from 'seamapi'

declare global {
  // eslint-disable-next-line no-var
  var seam: SeamProviderProps | undefined
}

export interface SeamContext {
  client: Seam | null
  clientOptions?: SeamClientOptions | undefined
  publishableKey?: string | undefined
  userIdentifierKey?: string | undefined
}

type SeamProviderProps =
  | SeamProviderPropsWithClient
  | (SeamProviderPropsWithPublishableKey & SeamClientOptions)

interface SeamProviderPropsWithClient {
  client: Seam
}

interface SeamProviderPropsWithPublishableKey {
  publishableKey: string
  userIdentifierKey?: string
}

export function SeamProvider({
  children,
  ...props
}: PropsWithChildren<SeamProviderProps>): JSX.Element {
  const { Provider } = seamContext

  const queryClientRef = useRef(new QueryClient())

  const contextRef = useRef(createSeamContextValue(props))
  if (
    contextRef.current.client == null &&
    contextRef.current.publishableKey == null
  ) {
    contextRef.current = defaultSeamContextValue
  }

  if (
    contextRef.current.client == null &&
    contextRef.current.publishableKey == null
  ) {
    throw new Error('Must provide either a Seam client or a publishableKey.')
  }

  return (
    <div className='seam-components'>
      <QueryClientProvider client={queryClientRef.current}>
        <Provider value={{ ...contextRef.current }}>{children}</Provider>
      </QueryClientProvider>
    </div>
  )
}

const createDefaultSeamContextValue = (): SeamContext => {
  if (globalThis.seam == null) {
    return { client: null }
  }

  try {
    return createSeamContextValue(globalThis.seam)
  } catch (err) {
    // eslint-disable-next-line no-console
    console.warn(err)
    return { client: null }
  }
}

const createSeamContextValue = (options: SeamProviderProps): SeamContext => {
  if (isSeamProviderPropsWithClient(options)) {
    return options
  }

  if (isSeamProviderPropsWithPublishableKey(options)) {
    return {
      ...options,
      client: null,
    }
  }

  throw new Error('Invalid SeamProvider options')
}

const defaultSeamContextValue = createDefaultSeamContextValue()

export const seamContext = createContext<SeamContext>(defaultSeamContextValue)

export function useSeamContext(): SeamContext {
  const context = useContext(seamContext)

  if (context == null) {
    throw new Error('useSeamContext must be used inside a <SeamProvider/>')
  }

  return context
}

const isSeamProviderPropsWithClient = (
  props: SeamProviderProps
): props is SeamProviderPropsWithClient => {
  if (!('client' in props)) return false

  const { client } = props
  if (client == null) return false

  if (Object.values(props).some((v) => v == null)) {
    throw new Error('Cannot provide a Seam client along with other options.')
  }

  return true
}

const isSeamProviderPropsWithPublishableKey = (
  props: SeamProviderProps
): props is SeamProviderPropsWithPublishableKey & SeamClientOptions => {
  if ('publishableKey' in props) {
    const { publishableKey } = props
    if (publishableKey == null) return false

    if ('client' in props && props.client != null) {
      throw new Error('Cannot provide a Seam client along with other options.')
    }

    return true
  }
  return false
}
