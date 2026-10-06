import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

class ErrorBoundary extends React.Component {
  state = { hasError: false };

  static getDerivedStateFromError(err) {
    return { hasError: true }
  }

  // to handler the details of the error
  // This approach dont catch errors of asyncronous code
  componentDidCatch(error) {
    console.log("[Boundary]", error)
  }

  render() {
    if (this.state.hasError) { return this.props.fallback }
    else { return this.props.children };
  }
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ErrorBoundary fallback={<h1> Error at app level</h1>}>
      <App />
    </ErrorBoundary >
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();



