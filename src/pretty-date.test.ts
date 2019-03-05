import { prettyDate } from './pretty-date'

test('Display a pretty date', () => {
    const pretty = prettyDate('8/2/1966')
    expect(pretty).toBe('August 2 1966')
})
