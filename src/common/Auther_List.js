import React from 'react';
import {View} from 'react-native';
import Image from 'react-native-image-placeholder';

export const Auther_List = props => {
  const DATA = props.data.item;

  const IMAGE = 'https://source.unsplash.com/random/200x200?sig=1';

  return (
    <View
      style={{
        justifyContent: 'center',
        alignItems: 'center',
        width: 85,
        height: 85,
        marginHorizontal: 10,
        padding: 10,
      }}>
      <Image
        style={{
          width: '100%',
          height: '100%',
        }}
        borderRadius={50}
        loadingStyle={{size: 'large', color: 'blue'}}
        resizeMode="contain"
        source={{uri: DATA.artworkUrl100 == null ? IMAGE : DATA.artworkUrl100}}
      />
    </View>
  );
};
