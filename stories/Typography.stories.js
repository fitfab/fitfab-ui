/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { Heading, Copy } from '../lib/index'

export default { title: 'Typography' }

export const headings = () => (
    <div style={{ width: '680px' }}>
        <Heading variant="H1">
            H1 (32px/40px) -- This a heading with long copy to check the line-height proportion.
        </Heading>
        <Copy>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </Copy>
        <Heading variant="H2">
            H2 (28px/36px) -- This a heading with long copy to check the line-height proportion.
        </Heading>
        <Copy>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </Copy>
        <Heading variant="H3">
            H3 (20px/28px) -- This a heading with long copy to check the line-height proportion.
        </Heading>
        <Copy>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </Copy>
        <Heading variant="H4">
            H4 (16px/24px) -- This a heading with long copy to check the line-height proportion.
        </Heading>
        <Copy>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </Copy>
        <Copy size="12px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </Copy>
        <Copy size="10px">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </Copy>{' '}
    </div>
)
