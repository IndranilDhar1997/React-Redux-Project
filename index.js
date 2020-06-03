import React from 'react';
import { AppRegistry } from 'react-native';


import App from './src/App';
import {name as appName} from './app.json';

import reducers from './src/reducers';

AppRegistry.registerComponent( appName, () => App );
