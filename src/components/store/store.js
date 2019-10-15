import { createStore, applyMiddleware, compose } from 'redux'
import reducers from './reducers'
import { getStateStorage, saveStateStorage } from './localStorage'
import thunk from 'redux-thunk'

const storageState = getStateStorage()

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
  reducers, 
  storageState,
  composeEnhancer(applyMiddleware(thunk))
)

store.subscribe(() => {
  saveStateStorage({
    cards: store.getState().cards
  })
})

export default store;