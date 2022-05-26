import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import 'tw-elements';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter } from 'react-router-dom';

import {
 
  QueryClient,
  QueryClientProvider,
} from 'react-query'

const queryClient = new QueryClient()


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    </React.StrictMode>
  </BrowserRouter>
);

reportWebVitals();
