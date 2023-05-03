import { type LockDevice } from 'seamapi'

import { ChevronRightIcon } from 'lib/icons/ChevronRight.js'
import { BatteryStatus } from 'lib/ui/DeviceDetails/BatteryStatus.js'
import { DeviceImage } from 'lib/ui/DeviceDetails/DeviceImage.js'
import { ModelStatus } from 'lib/ui/DeviceDetails/ModelStatus.js'
import { OnlineStatus } from 'lib/ui/DeviceDetails/OnlineStatus.js'

export function DeviceDetails(props: { device: LockDevice }) {
  const { device } = props

  const lockStatus = device.properties.locked ? 'Locked' : 'Unlocked'

  const accessCodeLength =
    device.properties?.schlage_metadata?.access_code_length ?? null

  return (
    <div className='seam--device-details'>
      <div className='seam--header'>
        <div className='seam--content'>
          <div className='seam--image'>
            <DeviceImage device={device} />
          </div>

          <div className='seam--info'>
            <h4 className='seam--device-name'>{device.properties.name}</h4>
            <div className='seam--properties'>
              <OnlineStatus device={device} />
              <BatteryStatus device={device} />
              <ModelStatus device={device} />
            </div>
          </div>
        </div>
      </div>
      <div className='seam--box'>
        <div className='seam--content seam--access-codes'>
          <span className='seam--value'>49 access codes</span>
          <ChevronRightIcon />
        </div>
      </div>

      <div className='seam--box'>
        <div className='seam--content'>
          <span className='seam--label'>Lock status</span>
          <span className='seam--value'>{lockStatus}</span>
        </div>
        <AccessCodeLength accessCodeLength={accessCodeLength} />
      </div>
    </div>
  )
}

function AccessCodeLength(props: { accessCodeLength: number | null }) {
  const { accessCodeLength } = props
  if (accessCodeLength === null) {
    return null
  }

  return (
    <div className='seam--content seam--access-code-length'>
      <span className='seam--label'>Code length</span>
      <span className='seam--value'>{accessCodeLength} digits</span>
    </div>
  )
}
