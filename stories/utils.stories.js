import React from 'react'
import { prettyDate } from '../lib/index'

export default { title: 'Utils/Dates' }

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export const PrettyDate = () => prettyDate('08/02/1966')
