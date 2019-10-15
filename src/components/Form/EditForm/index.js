import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { getCardEdit } from '../../store/actions'
import { NewForm } from '../NewForm/'

export const EditForm = (props) => {

  const dispatch = useDispatch()

  useEffect(() => {
    
    const {id} = props.match.params

    dispatch(getCardEdit(id))
  }, [dispatch, id])



  if(!props.location.query){
    return <Redirect to='/' />
  }
  const { title, description, url } = props.location.query
  const { id } = props.match.params

  return (
    <div>
      <NewForm 
        title={title}
        id={id}
        description={description}
        url={url}
        headTitle="Editar"
        btnTitle="Guardar"
      />
    </div>
  )
}