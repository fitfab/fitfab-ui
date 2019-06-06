import { prettyDate } from './pretty-date'

test('Display a pretty date', () => {
    const pretty = prettyDate('8-2-1966')
    expect(pretty).toBe('August 2, 1966')
})

test('Display today pretty date', () => {
    const pretty = prettyDate()
    expect(pretty).toBe(pretty)
})
