import styled from 'styled-components/native';
import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
  }
});

export const TitleArea = styled.View`
  justify-content: center;
  margin-left: 5%;
  width: 90%;
  height: 100px;
`;

export const Title = styled.Text`
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  font-family: Arial;
`;

export const RoomCard = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  background-color: #f1f1f1;
  width: 90%;
  margin-left: 5%;
  height: 70px;
  margin-bottom: 25px;
  border-radius: 10px;
`;

export const RoomTitle = styled.Text`
  color: #000222;
  font-size: 20px;
`;