import type { ButtonProps } from 'lib/ui/types.js'

export function IconButton(props: ButtonProps) {
  return <button {...props} className='seam--button seam--icon-button' />
}
