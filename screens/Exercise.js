import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block } from 'galio-framework';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('screen');

export default class Exercise extends React.Component {

  renderExercise = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.homeContainer}>
        <Block flex>
        <WebView
          source={{ uri: 'https://app.actibhealth.com/main/exercise/' }}
          style={{ flex: 1 }}
        />
      </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderExercise()}
      </Block>
    );
  }
}

const styles = StyleSheet.create({
  home: {
    width: width,   
  },
  homeContainer: {
    minHeight: '100%',
    backgroundColor: 'green',
    minWidth: '100%',
  },
});
