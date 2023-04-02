import {sizes, color} from './Theme/index';
import {StyleSheet} from 'react-native';
export const styles = StyleSheet.create({
  ViewStyle: {
    margin: sizes.marign,
    borderWidth: 1,
    borderRadius: sizes.radious,
    fontSize: sizes.M,
    padding: sizes.padding,
    backgroundColor: 'lightyellow',
    shadowColor: color.black,
    shadowOpacity: 0.4,
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowRadius: 1,
    elevation: 4,
    color: color.black,
  },
});
