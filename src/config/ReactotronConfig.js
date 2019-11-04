import Reactotron from 'reactotron-react-native';

import {NativeModules} from 'react-native';

if (__DEV__) {
  const {scriptURL} = NativeModules.SourceCode;
  const scriptHostname = scriptURL.split('://')[1].split(':')[0];
  const tron = Reactotron.configure({host: scriptHostname})
    .useReactNative()
    .connect();

  console.tron = tron;

  tron.clear();
}
