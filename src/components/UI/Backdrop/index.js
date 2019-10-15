import React from 'react'
import { Backdrop } from './styles'

export const BackdropComponent = ({ show, clicked }) =>
  show ? <Backdrop onClick={clicked}></Backdrop> : null
