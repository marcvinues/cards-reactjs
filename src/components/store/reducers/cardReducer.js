import {
  ADD_CARD,
  REMOVE_CARD,
  GET_EDIT_CARD,
  EDIT_CARD
} from '../actions/types'

const initialState = {
  cards: []
}

export default function(state = initialState, action) {
  switch (action.type) {
    case ADD_CARD:
      return {
        ...state,
        cards: [...state.cards, action.payload]
      }
    case REMOVE_CARD:
      return {
        ...state,
        cards: state.cards.filter(card => card.id !== action.payload)
      }
    case GET_EDIT_CARD: 
      return {
        ...state
      }
    case EDIT_CARD:
      return {
        ...state,
        cards: action.payload
      }
    default:
      return state
  }
}
