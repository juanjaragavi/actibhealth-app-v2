import React from 'react';
import { StyleSheet, Dimensions, ScrollView } from 'react-native';
import { Block } from 'galio-framework';
import { WebView } from 'react-native-webview';

const { width } = Dimensions.get('screen');

export default class Home extends React.Component {

  renderHome = () => {
    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.homeContainer}>
        <Block flex>
        <WebView
          source={{ uri: 'https://app.actibhealth.com/main/home/' }}
          style={{ flex: 1 }}
        />
      </Block>
      </ScrollView>
    )
  }

  render() {
    return (
      <Block flex center style={styles.home}>
        {this.renderHome()}
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
