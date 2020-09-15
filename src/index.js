import React from 'react';
import ReactDOM from 'react-dom';
import * as serviceWorker from './audio-source/serviceWorker';

import {IndexRouter} from "./audio-source/server";
import {LibraryProcessor} from "./audio-source/song";

import {pageList, themeName} from "./pages/";

// Set default library
import DefaultLibraryData from "./snesology.library";
LibraryProcessor.setDefaultLibrary(DefaultLibraryData);

// TODO: switch css theme and header image
ReactDOM.render(
  <React.StrictMode>
      <IndexRouter pageList={pageList} themeName={themeName} />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

serviceWorker.register();
