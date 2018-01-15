import styled from 'styled-components'
import * as colors from '../styles/colors'

const Button = styled.button`
    background: ${({ reverse, fg, bg }) =>
        reverse ? colors[fg] : colors[bg]};
    border-width: 1px;
    border-style: solid;
    border-color: ${({ reverse, fg, bg }) => reverse ? colors[fg] : colors[bg]};
    border-color: ${({ outlined, fg, bg }) => outlined ? colors[fg] : colors[bg]};
    box-sizing: border-box;
    color: ${({ reverse, fg, bg }) => reverse ? colors[bg] : colors[fg]};
    cursor: pointer;
    display: inline-block;
    font-size: 11px;
    line-height: 36px;
    letter-spacing: 1px;
    font-weight: 100;
    margin: 8px 0;
    outline: none;
    padding: 0 24px;
    text-align: left;
    text-transform: uppercase;
    transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
    position: relative;
    width: 150px;

    &: after {
        content: '';
        display: block;
        position: absolute;
        top: 15px;
        right: 16px;
        height: 4px;
        width: 4px;
        transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
        border-top: 1px solid ${({ reverse, bg, fg }) => reverse ? colors[bg] : colors[fg]};
        border-right: 1px solid ${({ reverse, bg, fg }) => reverse ? colors[bg] : colors[fg]};
        transform: rotate(45deg);
    }

    &: hover {
        // outlined
        ${props => props.outlined &&
        `border-color: ${colors[props.hbg]}; color: ${colors[props.hbg]};`};

    // reverse
    ${props =>
        props.reverse &&
        !props.outlined &&
        `background: ${colors[props.hbg]}; color: ${colors[props.fg]}; border-color: ${colors[props.hbg]};`};

    // default
    ${props =>
        !props.reverse &&
        !props.outlined &&
        `background: ${colors[props.hbg]}; border-color: ${colors[props.hbg]};`};

        &: after {
        // outlined
        ${props =>
        props.outlined &&
        `border-color: ${colors[props.hbg]}; color: ${colors[props.hbg]};`};
        // reverse
        ${props =>
        props.reverse &&
        !props.outlined &&
        `border-color: ${colors[props.fg]}; color: ${colors[props.fg]};`};
    }
}
`

Button.defaultProps = {
    bg: 'dark',         // background color
    fg: 'white',        // foreground color
    hbg: 'brand',       // hover background color
    reverse: false,     // reverse background/foreground
    outlined: false,    // bordered 
}

export default Button
