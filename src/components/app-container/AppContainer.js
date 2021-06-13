import React from 'react';
import Header from '../header/Header';
import Content from '../Content/Content';
import './AppContainer.css';

function AppContainer() {
    return (
        <div className="app--container">
            <header className="App-header">
                <Header></Header>
            </header>
            <main className="main-content">
                <Content />
            </main>
      </div>
    )
}

export default AppContainer;
