import React from 'react';
import {StyleSheet, Text, FlatList} from 'react-native';
import {brtsName} from './scr/references/brtsRoutes';
export default function App() {
  return (
    <FlatList
      data={brtsName}
      keyExtractor={item => item.name}
      renderItem={({item}) => <Text style={styles.textStyle}>{item.name}</Text>}
    />
  );
}

const styles = StyleSheet.create({
  textStyle: {
    borderWidth: 1,
    margin: 5,
    padding: 10,
    borderRadius: 10,
  },
});

/*
return Component

<View></View>
<Text></Text>
<Image/>
<TextInput/>
<Button/> | <TouchableOpacity></TouchableOpacity>
FlatList

*/
