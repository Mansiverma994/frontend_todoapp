import React from 'react'
import ReactDOM from 'react-dom'
import ApolloClient from "apollo-boost";
import { ApolloProvider } from "react-apollo";
import App from './components/App'
import './node_modules/bootstrap/dist/css/bootstrap.min.css';

const client = new ApolloClient({
    uri: "http://localhost:8000/graphql"
});

ReactDOM.render(
    <ApolloProvider client={client}>
        <App />
    </ApolloProvider>,
    document.getElementById('app')
)