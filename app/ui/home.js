import React from 'react';
import NavHeader from 'ui/nav-header.js';

class Home extends React.Component{
    render() {
        return (
            <div className="app">
                <NavHeader />
                <main>
                    <h1>Home</h1>
                </main>
            </div>
        )
    }
}

export default Home;