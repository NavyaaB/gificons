import React from 'react';
import './App.css';
import SearchComponent from './components/SearchComponent';
import GifList from './components/GifyList';
import axios from 'axios';


class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {gifys: []}
    this.handleTermChange = this.handleTermChange.bind(this);
  }
  
  handleTermChange = (term) => {
    const url = `http://api.giphy.com/v1/gifs/search?q=${term.replace(/\s/g, '+')}&api_key=dc6zaTOxFJmzC`;
        axios.get(url)
        .then(response => this.setState({gifys: response.data.data}))
  }

  render() {
    return (
      <div className="App">
        <h3>Hi there!!</h3>
        <SearchComponent onTermChange={term=>this.handleTermChange(term)} />
        <GifList gifys={this.state.gifys} />
      </div>
    );
  }
}

export default App;
