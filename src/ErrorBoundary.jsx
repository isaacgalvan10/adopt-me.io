// mostly code from reactjs.org/docs/error-boundaries.html

import React, { Component } from 'react';
import { Link } from '@reach/router';

class ErrorBoundary extends Component {
  state = { hasError: false };
  static getDerivedStateFromError() {
    
  }
  render() { 
    return (

    );
  }
}
 
export default ErrorBoundary;