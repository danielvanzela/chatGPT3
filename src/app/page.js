import * as React from 'react';
import MenuAppBar from './elementos/menu.js';
import ChatComBot from './elementos/chat.js'


export default function index() {
  return (
    <React.Fragment>
      <MenuAppBar />
      <ChatComBot/>
    </React.Fragment>
  );
}