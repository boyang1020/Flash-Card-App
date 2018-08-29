import expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';


class App extends React.Component {
  renderCard(item) {
    return (
      <Card
        key={item.id}>
        <Text style={{ marginBottom: 100, }} >{item.question}</Text>
        <Button
          icon={{ name: 'code' }}
          onPress={this.flipcard}
          backgroundColor='#03a9f4'
          title='view now'
        />
      </Card>
    )
  };

  renderNoMoreCards() {
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
        <Deck
          data={DATA}
          renderCard={this.renderCard}
          renderNoMoreCards={this.renderNoMoreCards}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {

  }
});

export default App;
