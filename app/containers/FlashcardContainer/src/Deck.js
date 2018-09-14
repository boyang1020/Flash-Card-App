import React, { Component } from 'react';
import { connect } from 'react-redux';
import { updateIndex, updateCards } from '../FlashcardActions';
import ViewMore from './ViewMore';
import { View, Animated, PanResponder, Dimensions, LayoutAnimation, UIManager } from 'react-native';

const SCREEN_WIDTH = Dimensions.get('window').width;
const SWIPE_THRESHOLD = 0.25 * SCREEN_WIDTH;
const SWIPE_OUT_DURATION = 250;

class Deck extends Component {
  static defaultProps = {
    onSwipeRight: (item, score) => { item.score = score },
    onSwipeLeft: () => { },
    data: []
  }

  constructor(props) {
    super(props);

    const position = new Animated.ValueXY();
    const panResponder = PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onPanResponderMove: (event, gesture) => {
        position.setValue({ x: gesture.dx, y: gesture.dy })
      },
      onPanResponderRelease: (event, gesture) => {
        if (gesture.dx > SWIPE_THRESHOLD) {
          this.forceSwipe('right');
        } else if (gesture.dx < -SWIPE_THRESHOLD) {
          this.forceSwipe('left');
        } else {
          this.resetPosition();
        }
      }
    });

    this.state = { panResponder, position, index: 0 };
  }

  // componentWillReceiveProps(nextProps) {
  //   if (nextProps.data !== this.props.data) {
  //     //this.setState({ index: 0 });
  //     const { dispatch } = this.props;
  //     dispatch(updateIndex(0));
  //   }
  // }

  componentWillUpdate() {
    UIManager.setLayoutAnimationEnablesExperimental && UIManager.setLayoutAnimationEnabledExperimental(true);
    LayoutAnimation.spring();
  }

  forceSwipe(direction) {
    const x = direction === 'right' ? SCREEN_WIDTH : -SCREEN_WIDTH;
    Animated.timing(this.state.position, {
      toValue: { x, y: 0 },
      duration: SWIPE_OUT_DURATION
    }).start(() => this.onSwipeComplete(direction));
  }

  onSwipeComplete(direction) {
    const { onSwipeLeft, onSwipeRight, data, dispatch } = this.props;
    const item = data[this.props.index]
    const inactive = [];
    //If no score attached to card, set score to 0
    item.score = item.score || 0;

    direction === 'right' ? onSwipeRight(item, item.score + 1, Math.min(item.score + 1, 2)) : onSwipeLeft(item);
    if (item.score === 2) {
      inactive.push(item);
    }
    // Create a session for this user and this card, with the score.
    const session = {
      userId: this.props.userId,
      cardId: item.id,
      score: item.score
    }
    // If there's a sessionId associated with card, make sure we're updating the same session in the db
    if (item.sessionId) {
      session.id = item.sessionId;
    }
    this.state.position.setValue({ x: 0, y: 0 })
    //this.setState({ index: this.state.index + 1 })
    dispatch(updateIndex(this.props.index + 1))
    dispatch(updateCards(this.props.userId, session))
  }

  resetPosition() {
    Animated.spring(this.state.position, {
      toValue: { x: 0, y: 0 }
    }).start();

  }

  getCardStyle() {
    const { position } = this.state;
    const rotate = position.x.interpolate({
      inputRange: [-SCREEN_WIDTH * 2.0, 0, SCREEN_WIDTH * 2.0],
      outputRange: ['-120deg', '0deg', '120deg']

    });

    return {
      ...position.getLayout(),
      transform: [{ rotate }]
    };
  }

  renderCards() {
    if (this.props.index >= this.props.data.length) {
      return <ViewMore 
      sessionId={this.props.sessionId}
      userId={this.props.userId}
      cardId={this.props.cardId}
      data={this.props.data}/>;
    }

    return this.props.data.map((item, i) => {
      if (i < this.props.index) { return null; }

      if (i === this.props.index) {
        return (
          <Animated.View
            key={item.id}
            style={[this.getCardStyle(), styles.cardStyle]} {...this.state.panResponder.panHandlers}>
            {this.props.renderCard(item)
            });
      </Animated.View>
        );
      }
      //top: 3 is how to show bottom of cards under the top card
      return (
        <Animated.View
          key={item.id}
          style={[styles.cardStyle, { top: 3 * (i - this.props.index) }]}>
          {this.props.renderCard(item)}
        </Animated.View>
      );
    }).reverse();
  }

  render() {
    return (
      <View>
        {this.renderCards()}
      </View>
    );
  }
}

const styles = {
  cardStyle: {
    position: 'absolute',
    width: SCREEN_WIDTH,
    borderRadius: 20,
  }
};
const mapStateToProps = (state) => {
  return {
    userId: state.login.accessToken.userId
  }
}
export default connect(mapStateToProps)(Deck);
