import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';

export const Loader = () => {
  return (
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          height: 100,
          width: 100,
          borderRadius: 20,
          backgroundColor: '#8fe9b670',
        }}>
        <ActivityIndicator size={'large'} color={'#00ff00'} />
      </View>
    </View>
  );
};
