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
        console.log('render: ModalDemoContainer', this.state.show)
        return (
            <>
                <button onClick={this.toggleModal}>Show Modal{this.state.show ? 'open' : 'close'}</button>
                <Modal open={this.state.show} toggleOpen={this.toggleModal}>
                    <p>hello</p>
                    <p>more</p>
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
