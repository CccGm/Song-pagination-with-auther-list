import React from 'react';
import {FlatList, Keyboard, Text, View} from 'react-native';
import {useSelector} from 'react-redux';
import {Song_List} from './Song_List';

export const Songs_Data = () => {
  const {DATA} = useSelector(state => state.Data_Reducer);

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATA}
        renderItem={item => <Song_List data={item} />}
        keyExtractor={item => item.trackTimeMillis}
      />
    </View>
  );
};
