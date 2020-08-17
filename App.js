import React, { useState  } from "react";
import 'react-native-gesture-handler';
import {View , Text , StyleSheet } from 'react-native'; 
import { AppLoading } from 'expo';
import * as Font from 'expo-font';

async function loadResourcesAsync() {
  await Promise.all([
   
    Font.loadAsync({
      Bold: require('./assets/fonts/LibreBaskerville-Bold.ttf'),
      Italic: require('./assets/fonts/LibreBaskerville-Italic.ttf'),
      Regular: require('./assets/fonts/LibreBaskerville-Regular.ttf'),
      
    }),
  ]);
}

    


function handleLoadingError(error) {
  // In this case, you might want to report the error to your error reporting
  // service, for example Sentry
  console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
  setLoadingComplete(true);
}

  


export default (props) => {

  const [isLoadingComplete, setLoadingComplete] = useState(false);

  if (!isLoadingComplete && !props.skipLoadingScreen) {
    return (
      <AppLoading
        startAsync={loadResourcesAsync}
        onError={handleLoadingError}
        onFinish={() => handleFinishLoading(setLoadingComplete)}
      />
    );
  } 

      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text style={{ fontFamily: 'Regular' , fontSize: 18  }}>Home Screen</Text>
        </View>
      );
    }
    
   
    