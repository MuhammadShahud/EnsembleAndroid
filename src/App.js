import React from 'react'
import { View } from 'react-native'
import Store from './redux/store'
import Router from './navigation/Router'
import { Provider } from 'react-redux'
import FlashMessage from "react-native-flash-message";



const App = () => {
  return (
    
    <Provider store={Store}>
      <View style={{ width: '100%', height: '100%', zIndex: -1 }}>
        <Router />
        <FlashMessage canRegisterAsDefault={true} floating={false} position="top" style={{ zIndex: 1000 }} />

      </View>
    </Provider>
  )
}

export default App
