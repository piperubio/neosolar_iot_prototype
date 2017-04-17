import React from 'react';
import { View, Text, Image } from 'react-native';
import { Actions } from 'react-native-router-flux'

import { styles } from '../../styles'
import { tutorialStyles } from './tutorialStyles'
import Icon from 'react-native-vector-icons/MaterialIcons';

import ActionButton from 'react-native-action-button';

const Tutorial = () => {
  const myicon = <Icon name="arrow-forward"
    color="white"
    size={24} />
  return (
    <View style={styles.container}>
      <View style={tutorialStyles.tutorialContainer}>
        <Image
          style={tutorialStyles.tutorialImage}
          source={{uri: 'https://raw.githubusercontent.com/wiki/facebook/react/react-logo-1000-transparent.png'}}
        />
        <Text
          style={tutorialStyles.tutorialText}>
          Conecta tu Datalogger a internet y activa tu Spot en Tiempo Real
        </Text>
      </View>
      <View style={tutorialStyles.tutorialButton}>
        <ActionButton
          position="center"
          hideShadow={false}
          offsetY={113}
          degrees={0}
          icon={myicon}
          buttonColor="rgba(231,76,60,1)"
          onPress={() => Actions.signin()}
        />
      </View>
    </View>
  );
}

export default Tutorial