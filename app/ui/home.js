import React from 'react';
import NavHeader from 'ui/nav-header.js';

class Home extends React.Component{
    render() {
        return (
            <div className="app">
                <NavHeader />
                <main>
                    <h1>Página inicial</h1>
                    <p>Escolha uma opcao no menu para exibir os dados</p>
                </main>
            </div>
        )
    }
}

export default Home;