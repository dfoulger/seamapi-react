import { useCallback } from 'react'

import { TextButton } from 'lib/ui/TextButton.js'

import { useCreateConnectWebview } from '../../../../hooks.js'

export interface ConnectAccountButtonProps {
  className?: string
}

export function ConnectAccountButton({
  className,
}: ConnectAccountButtonProps = {}): JSX.Element {
  const { isLoading, mutate } = useCreateConnectWebview({
    willNavigateToWebview: true,
  })

  const url = window.location.href
  const handleClick = useCallback(() => {
    mutate({
      accepted_providers: [],
      custom_redirect_url: url,
      custom_redirect_failure_url: url,
    })
  }, [mutate, url])

  return (
    <TextButton
      onClick={handleClick}
      className={className}
      disabled={isLoading}
    >
      {t.connectAccount}
    </TextButton>
  )
}

const t = {
  connectAccount: 'Connect Account',
}
