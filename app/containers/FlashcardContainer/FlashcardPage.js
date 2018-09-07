import expo from 'expo';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';
import CardInfo from './src/CardInfo';
import Origin from '../../assets/images/originLogo.png';

class App extends React.Component {
  state = {
    showAnswer: false
  }


  renderNoMoreCards = () => {
    return (
      <Card title="All Done">
        <Text style={{ marginBottom: 10 }}>

        </Text>
        <Button backgroundColor='#03a9f4'
          title='Get More'/>
      </Card>
    );
  }

  render() {
    const {accessToken} = this.props;
    const DATA = accessToken.cards && accessToken.cards.data;
    return (
      <View style={styles.container}>
         <Image
            source={Origin}
            style={styles.originImage}
          />
        <Deck style={styles.deckstyle}
          data={DATA}
          renderCard={item => <CardInfo item={item} />}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
    marginTop: -75,
  },
  originImage: {
    width: 110,
    height: 90,
    resizeMode: 'contain',
    paddingBottom: 300,
    alignSelf: "center",
    },
});

export default App;
