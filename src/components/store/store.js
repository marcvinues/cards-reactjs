import { createStore } from 'redux'
import reducers from './reducers'
import { getStateStorage, saveStateStorage } from './localStorage'

const storageState = getStateStorage()

const store = createStore(
  reducers, 
  storageState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
)

store.subscribe(() => {
  saveStateStorage({
    cards: store.getState().cards
  })
})

export default store;