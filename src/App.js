import React, { Component } from 'react';
//import { render } from 'react-dom';
import './App.css';
import Possts from './components/Posts'

class Appextends React.Component {
    state = {
        articles: []
    }


    ComponentDidMount(){
        client.getEntries()
        .then((response) => {
            console.log(response)
            this.setState({
                articles: response.items
            })
        })
        .catch(console.error)
    }
    render() {
        return (
            <div className="App">
                <div className='container'>
                    <header>
                        <div className='wrapper'>
                            <span>React and Contentful</span>
                        </div>
                    </header>
                    <main>
                        <div className='wrapper'>
                            <Posts posts={this.state.articles} />
                        </div>
                    </main>
                </div>
            </div>
        )
    }
}

export default App;