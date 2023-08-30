import type { Meta, StoryObj } from '@storybook/react'

import { DetailRow } from 'lib/ui/thermostat/DetailRow.js'
import { DetailSection } from 'lib/ui/thermostat/DetailSection.js'
import { DetailSectionGroup } from 'lib/ui/thermostat/DetailSectionGroup.js'

const meta: Meta<typeof DetailSection> = {
  title: 'Library/DetailSection',
  tags: ['autodocs'],
  component: DetailSection,
}

type Story = StoryObj<typeof DetailSection>

export const Content: Story = {
  render: () => {
    return (
      <DetailSectionGroup>
        <DetailSection label='Section'>
          <DetailRow label='Detail row 1' />
          <DetailRow label='Detail row 2' />
        </DetailSection>

        <DetailSection
          label='Section (with tooltip)'
          tooltipContent='Section with a tooltip.'
        >
          <DetailRow label='Detail row 1' />
          <DetailRow label='Detail row 2' />
        </DetailSection>
      </DetailSectionGroup>
    )
  },
}

export default meta
