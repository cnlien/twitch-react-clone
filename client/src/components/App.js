import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

// STYLING
import 'bootstrap/dist/css/bootstrap.css';

// COMPONENTS
import StreamCreate from './Streams/StreamCreate';
import StreamDelete from './Streams/StreamDelete';
import StreamEdit from './Streams/StreamEdit';
import StreamList from './Streams/StreamList';
import StreamShow from './Streams/StreamShow';
import Header from './Header/Header';

const App = () => {
  return (
    <>
    <BrowserRouter>
      <div className="ui container">
        <Header />
      </div>
      
      <div className="ui container">
          <Route exact path="/" component={StreamList} />
          <Route exact path="/stream/new" component={StreamCreate} />
          <Route exact path="/stream/edit" component={StreamEdit} />
          <Route exact path="/stream/delete" component={StreamDelete} />
          <Route exact path="/stream/show" component={StreamShow} />
      </div>
    </BrowserRouter>
    </>
  );
}

export default App;