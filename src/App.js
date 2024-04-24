import React from "react";
import {Admin,Resource} from 'react-admin'
import restProvider from 'ra-data-simple-rest'
import PostJ03 from './components/PostJ03'

function App() {
  return <Admin dataProvider={restProvider()}>
    <Resource name="j03" list={PostJ03}/>
  </Admin>
}

export default App;
