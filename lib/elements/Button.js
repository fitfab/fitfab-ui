import styled from 'styled-components'
import * as colors from '../styles/colors'

const Button = styled.button`
    background: ${props =>
        props.reverse ? colors[props.fontColor] : colors[props.bgColor]};
    box-sizing: border-box;
    color: ${props =>
        props.reverse ? colors[props.bgColor] : colors[props.fontColor]};
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
    border: 1px solid
        ${props =>
        props.outlined ? colors[props.bgColor] : colors[props.fontColor]};

    position: relative;
    width: 150px;

    &:after {
        content: '';
        display: block;
        position: absolute;
        top: 15px;
        right: 16px;
        height: 4px;
        width: 4px;
        transition: all 300ms cubic-bezier(0.215, 0.61, 0.355, 1);
        border-top: 1px solid
            ${props =>
        props.reverse
            ? colors[props.bgColor]
            : colors[props.fontColor]};
        border-right: 1px solid
            ${props =>
        props.reverse
            ? colors[props.bgColor]
            : colors[props.fontColor]};
        transform: rotate(45deg);
    }

    &:hover {
        // outlined
        ${props =>
        props.outlined &&
            `border-color: ${colors[props.hoverColor]}; color: ${
                colors[props.hoverColor]
            };`};
        // reverse
        ${props =>
        props.reverse &&
            !props.outlined &&
            `background: ${colors[props.hoverColor]}; color: ${
                colors[props.fontColor]
            }`};
        // default
        ${props =>
        !props.reverse &&
            !props.outlined &&
            `background: ${colors[props.hoverColor]}`};

        &:after {
            // outlined
            ${props =>
        props.outlined &&
                `border-color: ${colors[props.hoverColor]}; color: ${
                    colors[props.hoverColor]
                };`};
            // reverse
            ${props =>
        props.reverse &&
                !props.outlined &&
                `border-color: ${colors[props.fontColor]}; color: ${
                    colors[props.fontColor]
                };`};
        }
    }
`

Button.defaultProps = {
    bgColor: 'dark',
    fontColor: 'white',
    hoverColor: 'brand',
    reverse: false,
    outlined: false,
}

export default Button
