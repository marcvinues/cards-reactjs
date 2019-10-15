import React from 'react'
import { Form, Input } from './styles'
import { Btn } from "../../UI/Button";
import PropTypes from 'prop-types'

export const NewForm = ({ handleChange, handleSubmit, title, description, url, headTitle, btnTitle}) => {

  return (
    <Form onSubmit={e => handleSubmit(e)}>
      <h1 className="text-center">{headTitle}</h1>
      <Input
        type="text"
        placeholder="Título *"
        name="title"
        value={title}
        onChange={e => handleChange(e)}
        required
      />
      <Input
        type="text"
        name="description"
        placeholder="Descripción *"
        value={description}
        onChange={e => handleChange(e)}
        required
      />
      <Input
        type="text"
        name="url"
        placeholder="Imagen URL"
        value={url}
        onChange={e => handleChange(e)}
      />
      <div className="text-center">
        <Btn onClick={e => onClose(e)}>{btnTitle}</Btn>
      </div>
    </Form>
  )
}

NewForm.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string
}