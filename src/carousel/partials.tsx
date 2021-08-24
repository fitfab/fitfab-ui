import styled from 'styled-components'
import { CarouselProps } from './index'

export const Button = styled.button`
    background: rgba(255, 255, 255, 1);
    color: #fff;
    cursor: pointer;
    border: none;
    border-radius: 55% 0% 55% 0%;
    display: inline-block;
    position: absolute;
    top: 50%;
    left: -32px;
    transform: translateY(-50%) rotate(135deg);
    filter: drop-shadow(0 0 0.1rem rgb(0, 0, 0, 0.3));

    height: 56px;
    width: 56px;

    &:before {
        content: '';
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-120%, -120%) rotate(0deg);
        height: 12px;
        width: 12px;

        border-bottom: 1px solid #9c9c9c;
        border-right: 1px solid #9c9c9c;
        border-radius: 1px;
    }

    &:last-child {
        left: auto;
        right: -32px;

        &:before {
            border-bottom: none;
            border-top: 1px solid #9c9c9c;
            transform: translate(20%, 20%) rotate(-90deg);
        }
    }

    &:hover {
        filter: drop-shadow(0 0 0.1rem rgb(0, 0, 0, 0.3));
    }
`
export const CarouselView = styled.div<CarouselProps>`
    display: flex;
    height: 100%;
    margin: 0 auto;
    overflow-x: scroll;
    padding: 0 0 16px 0;
    scroll-snap-type: x mandatory;
    transform: translate3d(0, 0, 0); /* force the GPU */

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
