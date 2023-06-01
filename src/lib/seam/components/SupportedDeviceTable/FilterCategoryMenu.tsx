import { ChevronDownIcon } from 'lib/icons/ChevronDown.js'
import { Menu } from 'lib/ui/Menu/Menu.js'
import { MenuItem } from 'lib/ui/Menu/MenuItem.js'

export type FilterCategoryMenuProps = FilterCategoryMenuBaseProps &
  (
    | FilterCategoryMenuPropsWithAllOption
    | FilterCategoryMenuPropsWithoutAllOption
  )

interface FilterCategoryMenuBaseProps {
  label: string
  options: string[]
  onSelect: (option: string) => void
  buttonLabel?: string
}

interface FilterCategoryMenuPropsWithAllOption {
  hideAllOption?: false
  onAllOptionSelect: () => void
}

interface FilterCategoryMenuPropsWithoutAllOption {
  hideAllOption: true
  onAllOptionSelect?: never
}

export function FilterCategoryMenu({
  label = t.filter,
  options,
  hideAllOption = false,
  onSelect,
  onAllOptionSelect,
  buttonLabel,
}: FilterCategoryMenuProps): JSX.Element {
  const usableOptions = hideAllOption ? options : ['All', ...options]

  return (
    <div className='seam-supported-device-table-filter-menu-wrap'>
      <p>{label}</p>
      <Menu
        renderButton={({ onOpen }) => (
          <button onClick={onOpen}>
            <span>{buttonLabel}</span>
            <ChevronDownIcon />
          </button>
        )}
      >
        {usableOptions.map((option, index) => (
          <MenuItem
            key={`${index}:${option}`}
            onClick={() => {
              if (option === 'All') {
                onAllOptionSelect?.()
              } else {
                onSelect(option)
              }
            }}
          >
            <span>{option}</span>
          </MenuItem>
        ))}
      </Menu>
    </div>
  )
}

const t = {
  filter: 'Filter',
}
