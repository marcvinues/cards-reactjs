import styled from 'styled-components'

export const DivCard = styled.div`
  height: 17em;
  margin-top: 2em;
  box-shadow: 2px 5px 5px #c8c8c8;
`
export const Image = styled.img`
  position: relative;
  float: left;
  width: 200px;
  height: 200px;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  background-size: cover;
`

export const Title = styled.h4`
  position: absolute;
  top: 6em;
  padding: 0.5em 0 0 0.5em;
  color: white;
`
export const DivRemove = styled.div`
  opacity: 0;
  position: absolute;
  right: 0;
  width: 100%;
  bottom: .5em;
  &:hover {
    opacity: 1;
    display: block;
    width: 100%;
    text-align: right;
    padding: 0 1.5em;
  }
`

export const BtnDelete = styled.button`
  background: red;
  color: #fff;
  width: 75px;
`

export const TextDesc = styled.p`
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
`
