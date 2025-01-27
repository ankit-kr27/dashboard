import { createRoot } from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { NextUIProvider } from '@nextui-org/react';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import store from './app/store.js';

createRoot(document.getElementById('root')).render(
    <Provider store={store}>
        <NextUIProvider>
            <BrowserRouter>
                <main className="light">
                    <App />
                </main>
            </BrowserRouter>
        </NextUIProvider>
    </Provider>
);
