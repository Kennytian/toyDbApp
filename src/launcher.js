/* @flow */
'use strict';

import React from 'react';
import { AppRegistry } from 'react-native';

import { Provider } from 'react-redux';

import XhrRequest from './utils/xhrRequest';

import rootRouter from './routers/rootRouter';

XhrRequest.run();

AppRegistry.registerComponent('toyDbApp', () => rootRouter);
