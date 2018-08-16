import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Image, StyleSheet, Text, View, ScrollView, ListView } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Origin from '../../assets/images/originLogo.png';
import flashcard from '../../assets/images/flashcard.png';

export default class TutorialPage extends React.Component {
  render() {
    return (
      <ScrollView>
        <View style={styles.container}>
          <Image
            source={Origin}
            style={styles.originImage}
          />
          <Text style={styles.welcome}>
            Welcome to the Origin Flash Card App!
          </Text>
          <Image 
          source={flashcard}
          style={styles.flashCard}/>
          <Text style={styles.text}>
            Swipe right if you know the answer to the question.
          </Text>
          <Text style={styles.text}>
            Swipe left if you don't.
          </Text>
          <Text style={styles.text}>
            Tap the flashcard when you want to see the answer.
          </Text>
          <Button style={styles.button}
            onPress={this.loginButton}
            color={"#63A1CA"}
            backgroundColor={"#242F49"}
            borderRadius={3}
            title="get started" />
        </View>
      </ScrollView>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    paddingTop: 10,
  },
  originImage: {
    width: 110,
    height: 90,
    resizeMode: 'contain',
    marginTop: 20,
    paddingBottom: 30,
  },
  button: {
    marginTop: 55,
    marginBottom: 20,
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.5,
  },
  welcome: {
    fontFamily: 'AvenirNext-Regular',
    margin: 10,
    fontSize: 20,
    fontWeight: 'bold'
  },
  text: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 17,
    alignItems: 'flex-start',
    textAlign: 'left'
  },
  flashCard: {
    width: 300,
    height: 450,
    resizeMode: 'contain',
    marginTop: 20,
    paddingBottom: 30,
  }
})