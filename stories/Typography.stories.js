import React from 'react'
import { Heading } from '../lib/index'

export default { title: 'Typography'}

export const headings = ()=> (
    <div style={{ width: '20%'}}>
        <Heading variant='H1'>H1 -- This a heading with long copy to check the line-height proportion.</Heading>
        <Heading variant='H2'>H2 -- This a heading with long copy to check the line-height proportion.</Heading>
        <Heading variant='H3'>H3 -- This a heading with long copy to check the line-height proportion.</Heading>
        <Heading variant='H4'>H4 -- This a heading with long copy to check the line-height proportion.</Heading>
        <Heading >This a heading that should not render</Heading>
    </div>
)