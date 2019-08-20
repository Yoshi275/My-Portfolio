import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import { Container, Header , Grid , Divider , Segment } from 'semantic-ui-react'

class App extends Component {
  render() {
    return (
      <div className="App">


        <Container >

        </Container>
        <Segment basic>
        <Grid divided='vertically' className="App-header">
          <Grid.Row columns={1}>
            <Grid.Column className="Quote-intro">
                  <Header className="App-intro">Sic Parvis Magna</Header>
            </Grid.Column>
          </Grid.Row>
        </Grid>
          <Divider/>
        <Header className="App-subintro"> Greatness From Small Beginnings</Header>
        </Segment>

      </div>
    );
  }
}

export default App;
// <button class="ui primary button">Save</button>
// <div className="App-header">
//   // <img src={logo} className="App-logo" alt="logo" />
//   <h2> TOP SECRET</h2>
// </div>
// <p className="App-intro">
//   To get started, edit <code>src/App.js</code> and save to reload.
// </p>
