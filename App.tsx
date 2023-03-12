import React from 'react';
import {Text, View, StyleSheet} from 'react-native';
export default function App() {
  return (
    <View style={styles.viewStyle}>
      <Text style={styles.textStyle}>Hello World</Text>
      <Text style={styles.textStyle}>Hello World</Text>
      <Text style={styles.textStyle}>Hello World</Text>
      <Text style={styles.textStyle}>Hello World</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    color: 'green',
    marginVertical: 5,
    borderWidth: 1,
    flex: 1,
  },
  viewStyle: {
    flex: 1,
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
