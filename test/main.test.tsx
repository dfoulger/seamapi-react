import { render, screen } from 'fixtures/react.js'

test('DeviceList', () => {
  render(<p>Foo</p>)
  expect(screen.findByText('Foo')).toBeTruthy()
})
