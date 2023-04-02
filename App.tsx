import React, {useState} from 'react';
import {
  Button,
  View,
  Text,
  StyleSheet,
  Image,
  ScrollView,
  SafeAreaView,
} from 'react-native';
import {color} from './src/Theme';

export default function app() {
  return (
    <View>
      <Text style={style.header}> IT Freedom</Text>
      <SafeAreaView>
        <ScrollView>
          <View style={style.View1}>
            <Text style={style.text}>SEMSETERS</Text>

            <View
              style={{flexDirection: 'row', marginLeft: 22, borderWidth: 1}}>
              <View style={style.View2}>
                <Text style={style.sem}>SEMESTER 1</Text>
              </View>
              <View style={style.View2}>
                <Text style={style.sem}>SEMESTER 2</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 22}}>
              <View style={style.View2}>
                <Text style={style.sem}>SEMESTER 3</Text>
              </View>
              <View style={style.View2}>
                <Text style={style.sem}>SEMESTER 4</Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', marginLeft: 22}}>
              <View style={style.View2}>
                <Text style={style.sem}>SEMESTER 5</Text>
              </View>
              <View style={style.View2}>
                <Text style={style.sem}>SEMESTER 6</Text>
              </View>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </View>
  );
}

const style = StyleSheet.create({
  View1: {
    backgroundColor: color.primary,
  },
  View2: {
    backgroundColor: '#fff',
    width: 130,
    height: 140,
    marginLeft: 18,
    borderRadius: 10,
    margin: 10,
    flexDirection: 'row',
  },
  text: {
    fontSize: 40,
    color: '#fff',
    textAlignVertical: 'center',
    flexDirection: 'row',
    marginVertical: 30,
    marginLeft: 70,
    fontWeight: 'bold',
  },
  header: {
    fontSize: 22,
    backgroundColor: 'dodgerblue',
    color: 'black',
    borderLeftColor: 'dodgerblue',
    borderRightColor: 'dodgerblue',
    borderTopColor: 'dodgerblue',
    borderWidth: 1,
    paddingLeft: 60,
    paddingBottom: 10,
    paddingTop: 20,
    fontWeight: 'bold',
  },
  inputbox: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    margin: 5,
    fontSize: 23,
    padding: 5,
  },
  inputbox1: {
    backgroundColor: '#fff',
    borderRadius: 5,
    borderColor: 'black',
    borderWidth: 2,
    marginLeft: 5,
    marginRight: 5,
    marginBottom: 43,
    fontSize: 23,
    padding: 5,
  },
  sem: {
    fontSize: 18,
    paddingTop: 100,
    marginLeft: 15,
  },
});
