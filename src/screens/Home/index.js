import React from 'react';
import {View, Text, SafeAreaView, StatusBar} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';

import {
  RoomCard,
  TitleArea,
  Title,
  RoomTitle,
  styles,
} from './styles';

const Home = (props) => {
  const primaryColor = '#000';
  const secondaryColor = '#4e5066';

  return (
      <LinearGradient
        colors={[primaryColor, secondaryColor]}
        style={styles.container}
        start={{x: 0.0, y: 0.25}}
        end={{x: 0.5, y: 1.0}}>
        <SafeAreaView>
          <TitleArea >
            <Title>Minha Casa</Title>
          </TitleArea>
          <RoomCard
            onPress={() => {
              props.navigation.navigate('Kitchen');
            }}
          >
            <RoomTitle>Cozinha</RoomTitle>
          </RoomCard>
          <RoomCard>
            <RoomTitle>Sala</RoomTitle>
          </RoomCard>
          <RoomCard>
            <RoomTitle>Banheiros</RoomTitle>
          </RoomCard>
          <RoomCard>
            <RoomTitle>Quartos</RoomTitle>
          </RoomCard>
          <RoomCard>
            <RoomTitle>Varanda</RoomTitle>
          </RoomCard>
          <RoomCard>
            <RoomTitle>Corredor</RoomTitle>
          </RoomCard>
        </SafeAreaView>
      </LinearGradient>
  );
};

export default Home;
