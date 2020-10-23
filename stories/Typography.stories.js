/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { Heading, Text } from '../lib/index'

export default { title: 'Typography' }

export const headings = () => (
    <div style={{ width: '680px' }}>
        <Heading variant="H1">
            H1 (32px/40px) -- This a heading with long copy to check the line-height proWortion.
        </Heading>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </Text>
        <div style={{ borderBottom: '1px solid #ccc', margin: '24px 0 40px' }}></div>
        <Heading variant="H2">
            H2 (28px/36px) -- This a heading with long copy to check the line-height proportion.
        </Heading>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </Text>
        <div style={{ borderBottom: '1px solid #ccc', margin: '24px 0 40px' }}></div>
        <Heading variant="H3">
            H3 (20px/28px) -- This a heading with long copy to check the line-height proportion.
        </Heading>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </Text>
        <div style={{ borderBottom: '1px solid #ccc', margin: '24px 0 40px' }}></div>
        <Heading variant="H4">
            H4 (16px/24px) -- This a heading with long copy to check the line-height proportion.
        </Heading>
        <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </Text>
        <div style={{ borderBottom: '1px solid #ccc', margin: '24px 0 40px' }}></div>
        <Text size={12}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </Text>
        <Text size={10}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
            ea commodo consequat.
        </Text>
        <div style={{ borderBottom: '1px solid #ccc', margin: '24px 0 40px' }}></div>
    </div>
)
