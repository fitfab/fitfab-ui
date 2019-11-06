import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { linkTo } from '@storybook/addon-links'
import { withKnobs, text, boolean, number, object } from '@storybook/addon-knobs'

import { Modal } from '../lib/index'

const DefaultModal = () => {
    const [open, setOpen] = React.useState(true)
    return (
        <>
            <p
                style={{ cursor: 'pointer' }}
                onClick={() => {
                    // alert('hello')
                    setOpen(prev => !open)
                    console.log('open: ', open)
                }}
            >
                toggle modal
            </p>
        </>
    )
}

class ModalDemoContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            show: true,
        }
        //this.toggleModal = this.toggleModal.bind(this)
    }

    toggleModal = () => {
        this.setState({
            show: !this.state.show,
        })
    }
    render() {
        return (
            <>
                <button onClick={this.toggleModal}>Show Modal{this.state.show ? 'open' : 'close'}</button>
                <Modal title="Terms & Conditions" open={this.state.show} toggleOpen={this.toggleModal}>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
                        laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
                        voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat
                        non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </Modal>
            </>
        )
    }
}
storiesOf('Modal', module).add('default', () => {
    return (
        <div>
            <ModalDemoContainer />
        </div>
    )
})
