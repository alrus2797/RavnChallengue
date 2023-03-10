import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/custom.scss';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

const token = process.env.REACT_APP_GRAPHQL_TOKEN

console.log(` TOKEN : ${process.env.REACT_APP_GRAPHQL_TOKEN}`);

const client = new ApolloClient({
  uri: 'https://syn-api-prod.herokuapp.com/graphql',
  cache: new InMemoryCache(),
  headers: {
    authorization: `Bearer ${token}` || '',
  }
})

root.render(
  <React.StrictMode>
    <ApolloProvider client={client}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ApolloProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
