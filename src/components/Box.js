import React from 'react';
import { TouchableOpacity, Text, StyleSheet, Image } from 'react-native';

const Box = (props) => {
  const { title, icon, isActive, handleEvent} = props;
  return (
    <TouchableOpacity onPress={handleEvent} style={[
      styles.boxArea,
      { backgroundColor: isActive ? '#A6FF4D' : '#FE6464' }
    ]}>
      <Text 
        style={[styles.boxTitle, { color: isActive ? '#000' : '#fff' }]}>
        { title }
      </Text>
      <Image style={styles.icon} source={icon} />
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  boxArea: {
    width: 150,
    height: 150,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 50,
    borderWidth: 1,
    borderColor: '#000',
  },
  boxTitle: {
    fontSize: 20,
    color: '#000',
    fontFamily: 'Arial',
  },
  icon: {
    marginTop: 20,
  }
});

export default Box;
