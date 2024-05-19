import React, { Component } from 'react';

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, errorInfo) {
    // You can log the error to an error reporting service
    console.error('Error caught by error boundary:', error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      // Render fallback UI when an error occurs
      return <div> Something went wrong. Please try again later. </div>;
    }

    // Render children normally if no error occurred
    return this.props.children;
  }
}

export default ErrorBoundary;
