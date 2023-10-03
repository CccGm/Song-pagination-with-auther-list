import {useNavigation} from '@react-navigation/native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';

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
