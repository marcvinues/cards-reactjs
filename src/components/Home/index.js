import React, { Fragment } from 'react';
import Header from './Header'
import { ListCards } from '../ListCards'

export const Home = () => (
  <Fragment>
    <Header />
    <ListCards />
  </Fragment>
)