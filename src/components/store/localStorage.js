export const getStateStorage = () => {
  const cardStorage = localStorage.getItem('cards')
  if(cardStorage === null){
    return undefined
  }
  return JSON.parse(cardStorage)
}

export const saveStateStorage = (state) => {
  const cardStorage = JSON.stringify(state)
  localStorage.setItem('cards', cardStorage)
}