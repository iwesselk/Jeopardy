import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Jeopardy } from './components/Jeopardy';
import { PhotoCarousel } from './components/Carousel';

import './custom.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
        <Layout>
            <Route exact path='/' component={Jeopardy} />
            <Route exact path='/carousel' component={PhotoCarousel} />
        </Layout>
    );
  }
}
