import React from 'react';
import {Provider} from 'react-redux';
import {Store} from './src/redux/Store';
import {LogBox, SafeAreaView, Text, View} from 'react-native';
import {Route} from './src/routes/Route';

const App = () => {
  LogBox.ignoreLogs([
    'Warning: Encountered two children with the same key',
    'Warning: Each child in a list should have a unique "key" prop.',
  ]);

  return (
    <Provider store={Store}>
      <SafeAreaView style={{flex: 1}}>
        <Route />
      </SafeAreaView>
    </Provider>
  );
};

export default App;
