import * as React from 'react';

import { StyleSheet, View, Button } from 'react-native';
import { openCamera, openAndLog } from 'open-camera';

export default function App() {
  React.useEffect(() => {
    openAndLog({ text: 'Hello World' });
  }, []);

  return (
    <View style={styles.container}>
      <Button title="Open Camera" onPress={() => openCamera()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 60,
    height: 60,
    marginVertical: 20,
  },
});
