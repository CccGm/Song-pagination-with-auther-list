import React, {useEffect} from 'react';
import {Text, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {Api_Call} from '../redux/actions/Api_Call';
import {Loader} from '../common/Loader';
import {Songs_Data} from '../common/Songs_Data';

export const Home_screen = () => {
  const dispatch = useDispatch();
  const {loading, error} = useSelector(state => state.Action_Reducer);

  console.log(loading, '|loading??');
  useEffect(() => {
    dispatch(Api_Call());
  }, []);

  return <View style={{flex: 1}}>{loading ? <Loader /> : <Songs_Data />}</View>;
};
