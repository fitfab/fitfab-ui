import React from 'react'
import styled from 'styled-components'

const H1View = styled.h1`
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: subpixel-antialiased;
    color: #333;
    font: normal normal 400 32px/40px Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans,
        sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
        Noto Color Emoji;
    margin: 0 0 16px 0;
`

const H2View = styled.h2`
    color: #333;
    font: normal normal 400 28px/36px Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans,
        sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
        Noto Color Emoji;
    margin: 0 0 16px 0;
`

const H3View = styled.h3`
    color: #333;
    font: normal normal 500 20px/24px Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans,
        sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
        Noto Color Emoji;
    margin: 0 0 16px 0;
`

const H4View = styled.h4`
    color: #333;
    font: normal normal 600 16px/20px Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans,
        sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol,
        Noto Color Emoji;
    margin: 0 0 8px 0;
`

export interface HeadingProps {
    variant: string
    children: React.ReactChildren
}

export const Heading: React.FC<HeadingProps> = props => {
    const { variant, children } = props

    if (variant !== '') {
        if (variant === 'H1') {
            return <H1View>{children}</H1View>
        }
        if (variant === 'H2') {
            return <H2View>{children}</H2View>
        }
        if (variant === 'H3') {
            return <H3View>{children}</H3View>
        }
        if (variant === 'H4') {
            return <H4View>{children}</H4View>
        }
    }
    return (
        <em style={{ color: 'red' }}>
            Heaing Error: Missing property &#34;variant&#34;. Posible values: H1, H2, H3 or H4!
        </em>
    )
}

export interface CopyProps {
    size: string
}
export const Copy = styled.p<CopyProps>`
    color: #404040;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif,
        BlinkMacSystemFont, Helvetica Neue, Arial, Apple Color Emoji, Segoe UI Emoji, Segoe UI Symbol, Noto Color Emoji;
    font-size: ${p => (p.size ? p.size : '16px')};
    margin: 0 0 8px 0;
`
