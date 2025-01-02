import React, { Component, ErrorInfo, ReactNode } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { I18nextProvider } from "react-i18next";
import "antd/dist/antd.css";
import Router from "./router";
import i18n from "./translation";
import { createRoot } from 'react-dom/client';

// Define props and state interfaces
interface Props {
  children: ReactNode;
}

interface State {
  hasError: boolean;
}

// Add error boundary component
class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(_: Error): State {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error('Error:', error, errorInfo);
  }

  render(): ReactNode {
    if (this.state.hasError) {
      return <div>Something went wrong. Please refresh the page.</div>;
    }
    return this.props.children;
  }
}

const App = () => (
  <ErrorBoundary>
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <I18nextProvider i18n={i18n}>
        <Router />
      </I18nextProvider>
    </BrowserRouter>
  </ErrorBoundary>
);

const container = document.getElementById('root');
const loader = document.getElementById('initial-loader');

try {
  if (container) {
    console.log('Found root element, attempting to mount React');
    const root = ReactDOM.render(
      <ErrorBoundary>
        <BrowserRouter basename={process.env.PUBLIC_URL}>
          <I18nextProvider i18n={i18n}>
            <Router />
          </I18nextProvider>
        </BrowserRouter>
      </ErrorBoundary>,
      container
    );
    if (loader) {
      loader.remove();
    }
    console.log('React mounted successfully');
  } else {
    console.error('Root element not found');
  }
} catch (error) {
  console.error('Error mounting React:', error);
  if (loader) {
    loader.textContent = 'Error loading application. Check console for details.';
  }
}