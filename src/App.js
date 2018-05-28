import React, { Component } from 'react';
import logo from './logo.svg';
import {Layout, Header, Navigation, Drawer, Content} from 'react-mdl';
import Main from './components/main';
import { Link } from 'react-router-dom';
class App extends Component {
  render() {
    return (
    <div className="demo-big-content">
    <Layout>
< Header title = "React Demo" scroll >
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/calculator">Calculator</Link>
            </Navigation>
        </Header>
        <Drawer title="React Demo">
        <img src={logo} alt="demo"/>
            <Navigation>
                <Link to="/">Home</Link>
                <Link to="/calculator">Calculator</Link>
               
            </Navigation>
        </Drawer>
        <Content>
            <div className="page-content" />
           <Main/>
        </Content>
    </Layout>
</div>
    );
  }
}

export default App;
