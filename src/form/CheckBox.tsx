import React from 'react'
import { useToggle } from '../utils/use-toggle'

export const CheckBox: React.FC = () => {
    const [isChecked, toggle] = useToggle(false)
    console.log('isChecked: ', isChecked)
    return (
        <React.Fragment>
            <label>{isChecked ? 'yes' : 'no'}</label>:
            <input type="checkbox" onChange={() => toggle(isChecked)} name="open" checked={isChecked} />
        </React.Fragment>
    )
}
