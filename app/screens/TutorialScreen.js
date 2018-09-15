import React from 'react';
import { createStackNavigator } from 'react-navigation';
import { Image, StyleSheet, Text, View, ScrollView, ListView, TouchableOpacity } from 'react-native';
import { Button, Icon } from 'react-native-elements';
import Origin from '../assets/images/originLogo.png';
import flashcard from '../assets/images/flashcard.png';
import FlashcardScreen from '../screens/FlashcardScreen';

const FlashcardStack = createStackNavigator({
  Flashcard: FlashcardScreen,
});

FlashcardStack.navigationOptions = {
  tabBarLabel: 'Flashcard',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-log-in${focused ? '' : '-outline'}` : 'md-link'}
    />
  ),
};

export default class TutorialPage extends React.Component {
  static navigationOptions = {
    header: null,
  };

  render() {
    const { navigate } = this.props.navigation;
    return (
      <ScrollView>
        <View style={styles.container}>
        <TouchableOpacity onPress={() => navigate('Dashboard')}>
          <Image style={styles.originImage} source={Origin} />
        </TouchableOpacity>
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
            Click on the button at the bottom of the card to show or hide the answer.
          </Text>
          <Image
            source={Origin}
            style={styles.originImage}
          />
          <Text style={styles.text}>
            Click on the Origin icon to leave the flash card screen and go back to the dashboard.
          </Text>
          <Button style={styles.button}
            onPress={() => navigate('Flashcard')}
            color={"#63A1CA"}
            backgroundColor={"#242F49"}
            borderRadius={3}
            title="start" />
            <Text id="bottom" style={styles.text2}>
          Origin Code Academy LLC
          </Text>
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
    marginBottom: 10,
    width: 320,
    shadowColor: '#000',
    shadowOffset: { width: 3, height: 4 },
    shadowOpacity: 0.5,
  },
  welcome: {
    fontFamily: 'AvenirNext-Regular',
    margin: 10,
    fontSize: 20,
    textAlign: 'center',
    color: '#63A1CA',
    fontWeight: 'bold'
  },
  text: {
    fontFamily: 'AvenirNext-Regular',
    fontSize: 17,
    alignItems: 'flex-start',
    textAlign: 'center',
    marginTop: 20,
    color: '#63A1CA',
    marginHorizontal: 20
  },
  flashCard: {
    width: 300,
    height: 450,
    resizeMode: 'contain',
    marginTop: 20,
    paddingBottom: 30,
  },
  text2: {
    fontFamily: 'AvenirNext-Regular',
    textAlign: 'center',
    marginTop: 10,
    paddingBottom: 30,
  }
})
