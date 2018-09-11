import expo from 'expo';
import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';


class CardInfo extends React.Component {
  state = {
    showAnswer: false
  }

  flipcard = () => {
    this.setState({ showAnswer: !this.state.showAnswer })
  }

  render() {
    const { item } = this.props;

    return (
      <Card key={item.id}>
        {this.state.showAnswer ? (
        <Text style={{ marginBottom: 100 ,marginTop: 40, textAlign: "center"}} >
          {item.answer}
        </Text>
        ) : (
          <Text style={{ marginBottom: 100,marginTop: 40,textAlign: "center"}} >
          {item.question}
        </Text>
        
        )}
        <Button
          onPress={this.flipcard}
          backgroundColor='#03a9f4'
          title='Click for Question/Answer'
        />
      </Card>
    )
  };
};

const styles = StyleSheet.create({
  
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
    textAlign: 'center',
    marginTop: 20,
    marginHorizontal: 20
  },
  flashCard: {
    width: 300,
    height: 450,
    resizeMode: 'contain',
    marginTop: 20,
    paddingBottom: 30,
  },
})

export default CardInfo;
