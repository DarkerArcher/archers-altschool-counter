import React from 'react';
import './App.css'
import { ErrorBoundary } from 'react-error-boundary'
import { Route, Routes } from 'react-router-dom';
import { Counter, ErrorFallback, ErrorPage, ErrorTest } from './components';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path='/' element={<Counter />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/greeting' element={<ErrorTest />} />
        </Routes>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App