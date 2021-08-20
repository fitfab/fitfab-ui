import styled from 'styled-components'
import { CarouselProps } from './index'

export const Button = styled.button`
    background: rgba(0, 0, 0, 0.4);
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 100%;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: 8px;
    transform: translateY(-50%);

    height: 48px;
    width: 48px;

    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-25%, -50%) rotate(135deg);
        height: 16px;
        width: 16px;

        border-bottom: 2px solid rgba(255, 255, 255, 1);
        border-right: 2px solid rgba(255, 255, 255, 1);
    }

    &:last-child {
        left: auto;
        right: 8px;

        &:before {
            border-bottom: none;
            border-top: 2px solid rgba(255, 255, 255, 1);
            transform: translate(-70%, -50%) rotate(45deg);
        }
    }

    &:hover {
        background: rgba(0, 0, 0, 0.7);
    }
`
export const CarouselView = styled.div<CarouselProps>`
    display: flex;
    height: 100%;
    margin: 0 auto;
    overflow-x: scroll;
    padding: 0 0 16px 0;
    scroll-snap-type: x mandatory;
    transform: translate3d(0, 0, 0); /* force GPU */

    > * {
        scroll-snap-align: center;
        display: inline-block;
        margin-right: 1rem;
        flex: none;
    }

    > *:last-child {
        margin-right: 0;
    }
`
export const ViewPort = styled.div<CarouselProps>`
    width: ${p => p.width};
    height: ${p => p.height};
    margin: auto;
    overflow: hidden;
    position: relative;
`
