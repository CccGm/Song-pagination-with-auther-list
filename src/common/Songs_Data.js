import React, {useEffect, useState} from 'react';
import {ActivityIndicator, FlatList, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Song_List} from './Song_List';
import {Re_Api_Call} from '../redux/actions/Api_Call';

export const Songs_Data = () => {
  const {DATA} = useSelector(state => state.Data_Reducer);
  const dispatch = useDispatch();

  const [DATAS, setDATAS] = useState(DATA);

  const [loading, SetLoading] = useState(true);

  useEffect(() => {
    setDATAS(DATA);
  }, [DATA]);

  const listFooterComponent = () => {
    return loading == false ? null : (
      <View style={{marginVertical: 10}}>
        <ActivityIndicator size={'large'} color={'blue'} />
      </View>
    );
  };

  const onEndReached = () => {
    SetLoading(true);
    dispatch(Re_Api_Call());
    SetLoading(false);
  };

  return (
    <View style={{flex: 1}}>
      <FlatList
        data={DATAS}
        renderItem={item => <Song_List data={item} />}
        keyExtractor={item => item.trackTimeMillis}
        onEndReached={onEndReached}
        // onEndReachedThreshold={0}
        ListFooterComponent={listFooterComponent}
      />
    </View>
  );
};
