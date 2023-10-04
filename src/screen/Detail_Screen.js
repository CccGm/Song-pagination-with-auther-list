import React, {useEffect} from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import {Auther_List} from '../common/Auther_List';
import {useDispatch, useSelector} from 'react-redux';
import {Auth_Data_Api} from '../redux/actions/Api_Call';

export const Detail_Screen = props => {
  const PROPS = props.route.params.DATA;
  const {AUTH_DATA} = useSelector(state => state.Data_Reducer);
  const {loading, error} = useSelector(state => state.Action_Reducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(Auth_Data_Api(PROPS.artistId));
  }, []);

  return (
    <View style={{flex: 1}}>
      <View
        style={{
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 20,
        }}>
        <Text style={{fontSize: 24, color: 'black', fontWeight: 'bold'}}>
          {PROPS.trackName}
        </Text>
      </View>
      <View
        style={{
          height: '50%',
          padding: 25,
        }}>
        <Image
          source={{uri: PROPS.artworkUrl100}}
          resizeMode="contain"
          style={{width: '100%', height: '100%', borderRadius: 25}}
        />
      </View>
      <View>
        {loading ? null : (
          <FlatList
            data={AUTH_DATA}
            renderItem={item => <Auther_List data={item} />}
            keyExtractor={item => item.trackTimeMillis}
            horizontal={true}
            showsHorizontalScrollIndicator={false}
          />
        )}
      </View>
    </View>
  );
};
