import React from 'react'
import ReactDOM from 'react-dom'
import { Provider } from 'react-redux'
import { createStore, combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import SimpleForm from './SimpleForm';
import Home from './Home';
import axios from 'axios';


const dest = document.getElementById('content')
const reducer = combineReducers({
  form: reduxFormReducer
})
const store = (window.devToolsExtension
  ? window.devToolsExtension()(createStore)
  : createStore)(reducer)

const showResults = values =>{

  axios.post('/send_mail',values)
  .then(data=> console.log(data))
  .catch(err => console.log(err))
  

  new Promise(resolve => {
    setTimeout(() => {
      window.alert(`Thanks For Contacting Us`);
      resolve()
    }, 500)

  });


}

let render = () => {

  ReactDOM.render(
    <div>
      <Home />
    <Provider store={store}>
      <div style={{backgroundColor:'#C54B3C', padding: '0.5%'} }>
      <SimpleForm onSubmit={showResults} />
      </div>
    </Provider>
    </div>,
    dest
  )
}

if (module.hot) {
  const renderApp = render
  render = () => {
    renderApp()
  }
  const rerender = () => {
    setTimeout(render)
  }
  module.hot.accept('./SimpleForm', rerender)
}

render()
