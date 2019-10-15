import React, { Fragment, Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import { addCard } from '../store/actions'

import { NewForm } from './NewForm'

class FormCard extends Component {

  state = {
    id:'',
    title: '',
    description: '',
    url: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
      id: uuid()
    })
  }

  handleSubmit = (e) => {
    e.preventDefault();

    let form = this.state
    this.props.addCard(form)

    this.onClose()
  }

  onClose = (e) => {
    this.setState({
      title: '',
      description: '',
      url: ''
    })
   this.props.onClose && this.props.onClose(e)
  }

  render(){
    const {title, description, url, id} = this.state
    if(!this.props.show){
      return null
    }
    return (
      <Fragment>
        <NewForm 
          handleSubmit={this.handleSubmit}
          title={title}
          id={id}
          description={description}
          url={url}
          handleChange={this.handleChange}
          onClose={this.onClose}
        />
      </Fragment>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    addCard: (card)=> dispatch(addCard(card))
  }
}

export default connect(null, mapDispatchToProps)(FormCard);

// export const FormCard = (props) => {
//   console.log(props)
//   const [ title, setTitle ] = useState('')
//   const [ description , setDescription ] = useState('')
//   const [ url, setUrl ] = useState('')


//   const dispatch = useDispatch()
//   const addNewCard = card => dispatch(addCard(card))

//   function onClose(e) {
//     props.onClose && props.onClose(e)
//   }

//   function handleChange(){
//     console.log(title)
//   }

//   function onEdit(){

//   }

//   const handleSubmit = e => {
//     e.preventDefault()
//     onEdit()
//     addNewCard({
//       id: uuid(),
//       title,
//       description,
//       url
//     })

//     setTitle('')
//     setDescription('')
//     setUrl('')
//     onClose()
//   }
//   if(!props.show){
//     return null
//   }
//   return (
//     <Fragment>
//       <NewForm 
//         handleSubmit={handleSubmit}
//         title={title}
//         description={description}
//         url={url}
//         handleChange={handleChange}
//       />
//     </Fragment>
//   )
// }
