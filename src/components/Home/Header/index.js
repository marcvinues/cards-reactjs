import React, { Component } from 'react'
import { Head, Btn } from './styles'

import { ModalComponent } from '../../UI/Modal/index'
import  FormCard from '../../Form'


class Header extends Component {

  state = {
    show: false
  }

  handleModal = () => {
    this.setState({
      ...this.state,
      show: !this.state.show
    })
  }

  render() {

    const {show} = this.state

    return (
      <Head className="">
        <h1 className="text-center">Tarjetero</h1>
        <Btn onClick={this.handleModal}>+</Btn>
        <div>
          <ModalComponent show={show} clicked={this.handleModal}>
            <FormCard onClose={this.handleModal} show={show} />
          </ModalComponent>
        </div>
      </Head>
    )
  }
}

export default Header