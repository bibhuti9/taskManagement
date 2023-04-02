import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './styles';
import {styles as style} from '../style';
import {userInfoType} from './type';
export default function UserInfo({admin, collegeInfo, userInfo}) {
  const {name, email, age} = userInfo;
  const {address, collegeName} = collegeInfo;
  return (
    <View style={styles.container}>
      <Text style={style.ViewStyle}> name:- {name}</Text>
      <Text style={style.ViewStyle}> age:- {age}</Text>
      <Text style={style.ViewStyle}> email_id:- {email}</Text>
    </View>
  );
}
