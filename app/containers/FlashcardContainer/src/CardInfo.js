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
        <Text style={{ marginBottom: 100 }} >
          {item.answer}
        </Text>
        ) : (
          <Text style={{ marginBottom: 100, }} >
          {item.question}
        </Text>
        )}
        <Button
          icon={{ name: 'code' }}
          onPress={this.flipcard}
          backgroundColor='#03a9f4'
          title='view now'
        />
      </Card>
    )
  };
};

export default CardInfo;
