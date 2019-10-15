import React, { Fragment,  useEffect } from 'react';
import { Modal } from './styles'
import { BackdropComponent } from '../Backdrop'

export const ModalComponent = React.memo( props => {
  
  return (
    <Fragment>
      <BackdropComponent show={props.show} clicked={props.clicked} />
      <Modal style={{
        transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
        opacity: props.show ? '1' : '0'
      }}>
      {props.children}
      </Modal>
    </Fragment>
  )
})
