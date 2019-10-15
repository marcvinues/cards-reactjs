import { ADD_CARD, REMOVE_CARD, GET_EDIT_CARD, EDIT_CARD } from './types'

export const addCard = card => {
  return {
    type: ADD_CARD,
    payload: card
  }
}

export const removeCard = id => {
  return {
    type: REMOVE_CARD,
    payload: id
  }
}

export function getCardEdit(id){
  return (dispatch) => {
    dispatch(getCardEditAction())
    console.log(dispatch)
  }
}

export const getCardEditAction = () => ({
  type: GET_EDIT_CARD
})