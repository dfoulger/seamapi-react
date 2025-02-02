import type { ElementProps } from 'lib/element.js'
import type { EditAccessCodeFormProps } from 'lib/seam/components/EditAccessCodeForm/EditAccessCodeForm.js'

export const name = 'seam-create-access-code-form'

export const props: ElementProps<EditAccessCodeFormProps> = {
  accessCodeId: 'string',
}

export { EditAccessCodeForm as Component } from './EditAccessCodeForm.js'
