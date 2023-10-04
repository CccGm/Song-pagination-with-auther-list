import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import Image from 'react-native-image-placeholder';

export const Song_List = props => {
  const DATA = props.data.item;

  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={{
        marginHorizontal: 10,
        marginVertical: 5,
        backgroundColor: '#40a2f150',
        borderRadius: 15,
      }}
      onPress={() => navigation.navigate('Details_data', {DATA})}>
      <View style={{flexDirection: 'row'}}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            width: 85,
            height: 85,
            padding: 10,
            marginHorizontal: 10,
          }}>
          <Image
            style={{
              width: '100%',
              height: '100%',
            }}
            borderRadius={50}
            loadingStyle={{size: 'large', color: 'blue'}}
            resizeMode="contain"
            source={{uri: DATA.artworkUrl100}}
          />
        </View>
        <View style={{marginVertical: 10, width: '70%'}}>
          <Text
            style={{color: 'black', fontWeight: 'bold', fontSize: 16}}
            numberOfLines={1}>
            {DATA.artistName}
          </Text>
          <Text style={{color: '#000000'}} numberOfLines={2}>
            {DATA.collectionName}
          </Text>
          <Text style={{color: '#000000'}}>{DATA.primaryGenreName}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};
