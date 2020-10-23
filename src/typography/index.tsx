import React from 'react'
import styled from 'styled-components'

const H1View = styled.h1`
    text-rendering: optimizeLegibility;
    -webkit-font-smoothing: subpixel-antialiased;
    color: #333;
    font: normal normal 400 32px/40px Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans,
        sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial;
    margin: 0 0 16px 0;
    letter-spacing: 2px;
`

const H2View = styled.h2`
    color: #333;
    font: normal normal 400 28px/36px Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans,
        sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial;
    margin: 0 0 16px 0;
    letter-spacing: 2px;
`

const H3View = styled.h3`
    color: #333;
    font: normal normal 500 20px/24px Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans,
        sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial;
    margin: 0 0 16px 0;
    letter-spacing: 2px;
`

const H4View = styled.h4`
    color: #333;
    font: normal normal 600 16px/20px Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans,
        sans-serif, BlinkMacSystemFont, Helvetica Neue, Arial;
    margin: 0 0 8px 0;
    letter-spacing: 1px;
`

export interface HeadingProps {
    variant: string
    children: React.ReactChildren
}

export const Heading: React.FC<HeadingProps> = props => {
    const { children } = props
    const variant = props.variant.toLowerCase()
    if (variant !== '') {
        if (variant === 'h1') {
            return <H1View>{children}</H1View>
        }
        if (variant === 'h2') {
            return <H2View>{children}</H2View>
        }
        if (variant === 'h3') {
            return <H3View>{children}</H3View>
        }
        if (variant === 'h4') {
            return <H4View>{children}</H4View>
        }
    }
    return (
        <em style={{ color: 'red' }}>
            Heaing Error: Missing property &#34;variant&#34;. Posible values: H1, H2, H3 or H4!
        </em>
    )
}

export interface TextProps {
    size: number
}
export const Text = styled.p<TextProps>`
    color: #6f6f6f;
    font-family: Inter, system-ui, -apple-system, Segoe UI, Roboto, Ubuntu, Cantarell, Noto Sans, sans-serif,
        BlinkMacSystemFont, Helvetica Neue, Arial;
    font-size: ${p => (p.size ? p.size : '16')}px;
    letter-spacing: 1px;
    line-height: ${p => (p.size ? p.size + p.size / 2 : '24')}px;
    margin: 0 0 8px 0;
`
