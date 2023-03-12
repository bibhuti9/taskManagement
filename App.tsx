import React from 'react';
import {Text, View, StyleSheet, Image} from 'react-native';
export default function App() {
  return (
    <View style={styles.viewStyle}>
      <Image
        resizeMode="cover"
        style={styles.imageStyle}
        source={{
          uri: 'https://fastly.picsum.photos/id/994/300/300.jpg?hmac=GDm1Mpq1ylmjwx5Dv9u-l1nNEAKFDBQyanBzp7Nl4yg',
        }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  imageStyle: {
    height: 300,
  },
  textStyle: {
    fontSize: 25,
    color: 'green',
    marginVertical: 5,
    borderWidth: 1,
    flex: 1,
  },
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
