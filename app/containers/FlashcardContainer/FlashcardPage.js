import expo from 'expo';
import React from 'react';
import { StyleSheet, Text, View} from 'react-native';
import { Card, Button } from 'react-native-elements';
import Deck from './src/Deck';

 const DATA = [
      { id: 1, text: 'What is Javascript?' },
      { id: 2, text: 'What is CSS?' },
      { id: 3, text: 'What is HTML?' },
      { id: 4, text: 'What is a React Component?' },
      { id: 5, text: 'What is a for loop?' },
      { id: 6, text: 'How do you make a express server?' },
      { id: 7, text: 'Question #7' },
      { id: 8, text: 'Question #8' },
    ];

class App extends React.Component {
renderCard(item) {
  return(
    <Card
    key={item.id}
    title={item.text}
    image={{uri: item.uri}}
    >
    <Text style={{marginBottom: 10}}></Text>
    <Button
    icon={{name: 'code'}}
    backgroundColor='#03a9f4'
    title='view now'
    />
    </Card>
  )
}

renderNoMoreCards() {
  return (
    <Card title="All Done">
    <Text style={{marginBottom: 10 }}>
    
    </Text>
<Button backgroundColor='#03a9f4'
title='Get More'
/>
</Card>
  );
}

  render(){
  return(
    
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
})

export default App;
