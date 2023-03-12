import React from 'react';
import {StyleSheet, Text, ScrollView} from 'react-native';
import {brtsName} from './scr/references/brtsRoutes';
export default function App() {
  return (
    <ScrollView style={styles.viewStyle}>
      {brtsName.map(val => {
        return <Text>{val.name}</Text>;
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  viewStyle: {
    margin: 10,
    padding: 10,
    borderRadius: 20,
    backgroundColor: '#fff',
    shadowColor: '#000',
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 4,
    elevation: 4,
    borderWidth: 1,
  },
});

/*
return Component

<View></View>
<Text></Text>
<Image/>
<TextInput/>
<Button/> | <TouchableOpacity></TouchableOpacity>


*/
