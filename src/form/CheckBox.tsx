import React from 'react'
import { useToggle } from '../utils/use-toggle'

export const CheckBox: React.FC = () => {
    const [isChecked, toggle] = useToggle(false)
    return (
        <label>
            {isChecked ? 'yes' : 'no'}:{' '}
            <input type="checkbox" onClick={() => toggle(isChecked)} name="open" checked={isChecked} />
        </label>
    )
}
