// import React from "react";
import styled from 'styled-components'

export interface CssCarouselProps {
    width?: string
    height?: string
}

export const Button = styled.button`
    background: transparent;
    color: #fff;
    cursor: pointer;
    border: 0;

    border-top: 2px solid #fff;
    border-left: 2px solid #fff;

    display: inline-block;

    font-size: 24px;
    font-weight: 100;
    line-height: 0;
    text-align: center;

    position: absolute;
    top: 50%;
    left: 16px;
    transform: translateY(-50%) rotate(-45deg);

    height: 24px;
    width: 24px;

    &:last-child {
        border-top: 0;
        border-left: 0;
        border-right: 2px solid #fff;
        border-bottom: 2px solid #fff;
        left: auto;
        right: 16px;
    }
`
export const CarouselView = styled.div<CssCarouselProps>`
    padding: 0 0 16px 0;
    display: flex;
    overflow-x: scroll;
    scroll-snap-type: x mandatory;
    margin: 0 auto;
    transform: translate3d(0, 0, 0); /* force GPU */

    > * {
        scroll-snap-align: center;
        display: inline-block;
        margin-right: 1rem;
    }
`
export const ViewPort = styled.div<CssCarouselProps>`
    width: ${p => p.width};
    height: ${p => p.height};
    margin: auto;
    overflow: hidden;
    position: relative;
`
