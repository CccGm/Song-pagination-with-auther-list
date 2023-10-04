import React, {useEffect, useState} from 'react';
import {FlatList, Text, TouchableOpacity, View} from 'react-native';
import Image from 'react-native-image-placeholder';
import {Auther_List} from '../common/Auther_List';
import {useDispatch, useSelector} from 'react-redux';
import {Auth_Data_Api} from '../redux/actions/Api_Call';
var Sound = require('react-native-sound');

export const Detail_Screen = props => {
  const PROPS = props.route.params.DATA;
  const dispatch = useDispatch();
  const {AUTH_DATA} = useSelector(state => state.Data_Reducer);
  const {loading} = useSelector(state => state.Action_Reducer);
  const [soundPlay, setSoundPlay] = useState(false);

  useEffect(() => {
    dispatch(Auth_Data_Api(PROPS.artistId));
  }, []);

  var whoosh = new Sound(PROPS.previewUrl, Sound.MAIN_BUNDLE, error => {
    if (error) {
      console.log('failed to load the sound', error);
      return;
    }
  });

  const play_pause = () => {
    console.log('duration in seconds: ' + whoosh.getDuration());
    whoosh.getCurrentTime(seconds => console.log('at ' + seconds));
    if (soundPlay) {
      setSoundPlay(false);
      whoosh.pause();
      console.log('Pause');
    } else {
      setSoundPlay(true);
      whoosh.play(success => {
        if (success) {
          setSoundPlay(false);
          console.log('successfully finished playing');
        } else {
          setSoundPlay(false);
          console.log('playback failed due to audio decoding errors');
        }
      });
      console.log('Play');
    }
  };

  useEffect(() => {
    return () => {
      whoosh.release();
    };
  });

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
          style={{width: '100%', height: '100%'}}
          loadingStyle={{size: 'large', color: 'blue'}}
          borderRadius={20}
        />
      </View>
      {/* <View
        style={{
          justifyContent: 'space-around',
          flexDirection: 'row',
          marginVertical: 20,
        }}>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            paddingHorizontal: 30,
            paddingVertical: 10,
            backgroundColor: soundPlay ? '#3bee9a50' : '#3bee9aaa',
            borderRadius: 10,
          }}
          onPress={play_pause}
          disabled={soundPlay ? true : false}>
          <Text style={{fontSize: 16, color: '#be2d51fb', fontWeight: '600'}}>
            Play
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            paddingHorizontal: 30,
            paddingVertical: 10,
            backgroundColor: soundPlay ? '#3bee9aaa' : '#3bee9a50',
            borderRadius: 10,
          }}
          onPress={play_pause}
          disabled={soundPlay ? false : true}>
          <Text style={{fontSize: 16, color: '#be2d51fb', fontWeight: '600'}}>
            Pause
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={{
            borderWidth: 1,
            paddingHorizontal: 30,
            paddingVertical: 10,
            backgroundColor: soundPlay ? '#3bee9aaa' : '#3bee9a50',
            borderRadius: 10,
          }}
          disabled={soundPlay ? false : true}
          onPress={() => whoosh.stop(setSoundPlay(false))}>
          <Text
            style={{
              fontSize: 16,
              color: '#be2d51fb',
              fontWeight: '600',
            }}>
            Stop
          </Text>
        </TouchableOpacity>
      </View> */}
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
