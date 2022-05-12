import React, { Component } from "react";
import { GiftedChat, Bubble } from 'react-native-gifted-chat'
import { View, Text, StyleSheet} from 'react-native';


class Chat extends Component {
  constructor(){
    super();
    this.state ={
      messages: [],
    }
  }
  componentDidMount() {
    
    let { name} = this.props.route.params;
    this.props.navigation.setOptions({ title: name });

    this.setState({
      messages: [{
        _id: 1,
        text: 'Hello' + ' ' + name + '!',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: "React Native",
          avatar: "https://placeimg.com/140/140/any",
        } 
      }
    ]
  })
}

onSend(messages = []) {
  this.setState((previousState) => ({
    messages: GiftedChat.append(previousState.messages, messages),
  }));
}

// Customize the color of the sender bubble
renderBubble(props) {
  return (
    <Bubble
      {...props}
      wrapperStyle={{
        right: {
          backgroundColor: '#ADD8E6'
        }
      }}
    />
  )
}

  render() {
    let { color } = this.props.route.params;
    return (
      <View style={[{ backgroundColor: color }, styles.container]}>
      <GiftedChat
      renderBubble={this.renderBubble.bind(this)}
      messages={this.state.messages}
      onSend={(messages) => this.onSend(messages)}
      user={{
        _id: 1,
      }}
    />
     {/* Avoid keyboard to overlap text messages on older Andriod versions  */}
    {Platform.OS === 'android' ? <KeyboardAvoidingView behavior="height" /> : null}
    </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
})

export default Chat;

