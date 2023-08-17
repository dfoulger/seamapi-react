import classNames from 'classnames'

import {
  useClimateSettingSchedules,
  type UseClimateSettingSchedulesData,
} from 'lib/seam/thermostats/climate-setting-schedules/use-climate-setting-schedules.js'
import { ContentHeader } from 'lib/ui/layout/ContentHeader.js'
import { EmptyPlaceholder } from 'lib/ui/Table/EmptyPlaceholder.js'
import { TableBody } from 'lib/ui/Table/TableBody.js'
import { TableHeader } from 'lib/ui/Table/TableHeader.js'
import { TableTitle } from 'lib/ui/Table/TableTitle.js'
import { Caption } from 'lib/ui/typography/Caption.js'

import { ClimateSettingScheduleRow } from './ClimateSettingScheduleRow.js'

export interface ClimateSettingScheduleTableProps {
  deviceId: string
  onBack?: () => void
  className?: string
}

export function ClimateSettingScheduleTable({
  deviceId,
  onBack,
  className,
}: ClimateSettingScheduleTableProps): JSX.Element {
  const { climateSettingSchedules, isLoading, isError, error } =
    useClimateSettingSchedules({
      device_id: deviceId,
    })

  // TODO filtering
  const filteredClimateSettingSchedules = climateSettingSchedules ?? []

  if (isLoading) {
    return <p className={className}>...</p>
  }

  if (isError) {
    return <p className={className}>{error?.message}</p>
  }

  return (
    <div className={classNames('seam-table', className)}>
      <ContentHeader onBack={onBack} />
      <TableHeader>
        <TableTitle>
          {t.climateSettingSchedules}{' '}
          <Caption>({filteredClimateSettingSchedules.length})</Caption>
        </TableTitle>
      </TableHeader>
      <TableBody>
        <Content
          climateSettingSchedules={filteredClimateSettingSchedules}
          onClimateSettingScheduleClick={() => {}}
        />
      </TableBody>
    </div>
  )
}

function Content(props: {
  climateSettingSchedules: Array<UseClimateSettingSchedulesData[number]>
  onClimateSettingScheduleClick: (climateSettingScheduleId: string) => void
}): JSX.Element {
  const { climateSettingSchedules, onClimateSettingScheduleClick } = props

  if (climateSettingSchedules.length === 0) {
    return (
      <EmptyPlaceholder>{t.noClimateSettingSchedulesMessage}</EmptyPlaceholder>
    )
  }

  return (
    <>
      {climateSettingSchedules.map((schedule) => (
        <ClimateSettingScheduleRow
          climateSettingSchedule={schedule}
          key={schedule.climate_setting_schedule_id}
          onClick={() => {
            onClimateSettingScheduleClick(schedule.climate_setting_schedule_id)
          }}
        />
      ))}
    </>
  )
}

const t = {
  climateSettingSchedules: 'Climate setting schedules',
  noClimateSettingSchedulesMessage:
    'Sorry, no climate setting schedules were found',
}
