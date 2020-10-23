/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React from 'react'
import { Modal, Carousel, CheckBox } from '../lib/index'
import images from './data/slides'

export default { title: 'Modal', components: Modal, description: 'hello description' }
export const DefaultModal = () => {
    const [open, setOpen] = React.useState(true)
    const toggleModal = () => {
        setOpen(!open)
    }

    return (
        <>
            <button
                onClick={e => {
                    e.preventDefault()
                    toggleModal()
                }}
            >
                open modal
            </button>

            <Modal title="Terms & Conditions" open={open} toggleOpen={toggleModal} width="35vw" height="50vh">
                {/* <img src="https://source.unsplash.com/780x480?men-fashion" alt="image detail" width="100%" /> */}
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <Carousel width="100%">
                    {images.map((slide, index) => (
                        <img key={index} src={slide.src} alt={slide.alt} width={slide.width} />
                    ))}
                </Carousel>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
                    et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                    aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse
                    cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                    culpa qui officia deserunt mollit anim id est laborum.
                </p>
                <CheckBox
                    id="yes"
                    className="js_triggerCheckbox"
                    aria-label="cheked"
                    name="openTrigger"
                    value="yes"
                    label="yes, I agree to the Terms & Conditions"
                    onClick={toggleModal}
                />
            </Modal>
        </>
    )
}
