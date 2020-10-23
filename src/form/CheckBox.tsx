import React from 'react'
import styled from 'styled-components'
import { Expand } from '../utils/animations'

const CheckBoxView = styled.input`
    &[type='checkbox'] {
        display: none;
    }

    & + label {
        box-sizing: border-box;
        display: inline-block;
        height: 24px;
        line-height: 24px;
        min-width: auto;
        margin: 0 12px 0 40px;
        cursor: pointer;
        position: relative;
    }
    & + label:before {
        border: 1px solid #999;
        border-radius: 4px;
        display: block;
        content: '';
        height: 24px;
        width: 24px;
        line-height: 1.7;
        text-align: center;
        position: absolute;
        left: -40px;
    }
    &:checked + label:after {
        display: block;
        content: '';
        border-left: 2px solid green;
        border-bottom: 2px solid green;
        color: green;
        height: 4px;
        width: 12px;
        animation: ${Expand} 0.4s cubic-bezier(0.23, 0.615, 0.23, 1.405) both;
        position: absolute;
        left: -34px;
        top: 8px;
    }
`

export interface CheckBoxProps {
    name?: string
    id?: string
    value?: string
    label?: string
}

export const CheckBox: React.FC<CheckBoxProps> = (props: CheckBoxProps) => {
    const { name, id, ...rest } = props
    return (
        <React.Fragment>
            <CheckBoxView name={name} id={id} type="checkbox" {...rest} />
            <label htmlFor={props.id}>{props.label}</label>
        </React.Fragment>
    )
}
