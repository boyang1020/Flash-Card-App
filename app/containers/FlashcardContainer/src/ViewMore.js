import React from 'react';
import { connect } from 'react-redux';
import { Image, StyleSheet, Text, View } from 'react-native';
import { Card, Button } from 'react-native-elements';
import { moreCards, updateIndex } from '../FlashcardActions';

class ViewMore extends React.Component {
  loadMoreCards = (newDeck) => {
    const { dispatch } = this.props;
    dispatch(moreCards(newDeck));
  }

  render() {
    const { newDeck } = this.props;
    return (
      <Card title="All Done">
        <Text style={{ marginBottom: 10 }}>
        </Text>
        <Button
          onPress={() => { this.loadMoreCards(newDeck) }}
          backgroundColor='#03a9f4'
          title='Get More' />
      </Card >
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

export default connect()(ViewMore);
