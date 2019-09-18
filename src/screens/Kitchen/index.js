import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import {styles} from './styles';

import { getKitchenData, setKitchenData } from '../../services/api';
import firebase from '../../services/firebaseConfig';
import Box from '../../components/Box';

import LampIcon from '../../assets/lamp.png';
import FridgeIcon from '../../assets/fridge.png';
import MicrowaveIcon from '../../assets/microwave.png';
import OvenIcon from '../../assets/oven.png';

const Kitchen = () => {
  const primaryColor = '#000';
  const secondaryColor = '#4e5066';

  const [data, setData] = useState(null);

  useEffect(() => {
    getKitchenData()
      .then(res => {
        setData(res);
      })
      .catch(err => alert(err));
  }, []);

  const handleTogglePower = item => {
    setData({...data, [item]: !data[item]})
    setKitchenData(item);
  }

  return (
    <LinearGradient
      colors={[primaryColor, secondaryColor]}
      style={styles.container}
      start={{x: 0.0, y: 0.25}}
      end={{x: 0.5, y: 1.0}}>
      {data && (
        <>
          <Box 
            title="Lâmpada"
            icon={LampIcon}
            isActive={data.lamp}
            handleEvent={() => handleTogglePower('lamp')}
          />
          <Box 
            title="Microondas"
            icon={MicrowaveIcon}
            isActive={data.microwave}
            handleEvent={() => handleTogglePower('microwave')}
          />
          <Box
            icon={OvenIcon}
            title="Fogão"
            isActive={data.stove}
            handleEvent={() => handleTogglePower('stove')}
          />
          <Box
            title="Geladeira"
            icon={FridgeIcon}
            isActive={data.fridge}
            handleEvent={() => handleTogglePower('fridge')}
          />
        </>
      )}
    </LinearGradient>
  );
};

export default Kitchen;
