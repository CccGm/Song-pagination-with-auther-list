import React from 'react';
import {Image, Text, View} from 'react-native';

export const Auther_List = props => {
  const DATA = props.data.item;
  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 85,
        height: 85,
        marginHorizontal: 10,
      }}>
      <Image
        style={{
          borderWidth: 1,
          width: '80%',
          height: '80%',
          borderRadius: 50,
        }}
        resizeMode="contain"
        source={{uri: DATA.artworkUrl100}}
      />
    </View>
  );
};
