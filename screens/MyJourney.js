import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block } from 'galio-framework';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('screen');

export default class MyJourney extends React.Component {

  renderMyJourney = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.homeContainer}>
        <Block flex>
        <WebView
          source={{ uri: 'https://app.actibhealth.com/main/journey/' }}
          style={{ flex: 1 }}
        />
      </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderMyJourney()}
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
