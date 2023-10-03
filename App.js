import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './src/redux/Store';
import {SafeAreaView, Text, View} from 'react-native';
import {Route} from './src/routes/Route';

const App = () => {
  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <Route />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
