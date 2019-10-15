import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { removeCard } from '../store/actions'
import { DivCard, Title, Image, DivRemove, BtnDelete, TextDesc } from './styles'

const URL =
  'https://www.onthespot.co.uk/wp-content/uploads/2015/08/cute-dog-pictures-for-kids.jpg'

export const ListCards = () => {
  const { cards } = useSelector(state => state.cards)

  const dispatch = useDispatch()

  return (
    <div className="container">
      <div className="row">
        {cards.map(card => (
          <DivCard className="col-12 col-sm-4 col-md-4" key={card.id}>
            <Image src={card.url !== '' ? card.url : URL} />
            <Title>{card.title}</Title>
            <TextDesc>{card.description}</TextDesc>
            <DivRemove>
              <BtnDelete onClick={() => dispatch(removeCard(card.id))}>
                Borrar
              </BtnDelete>
            </DivRemove>
          </DivCard>
        ))}
      </div>
    </div>
  )
}
