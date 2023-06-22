/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable react/react-in-jsx-scope */
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    // eslint-disable-next-line react/jsx-no-comment-textnodes
    <View style={styles.container}>
      // eslint-disable-next-line react/jsx-no-comment-textnodes, react/jsx-no-comment-textnodes
      <Text>Open up App.js to start working on your app!</Text>
      // eslint-disable-next-line react/react-in-jsx-scope
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
