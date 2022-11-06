import React from 'react';
import './App.css'
import { ErrorBoundary } from 'react-error-boundary'
import { Route, Routes } from 'react-router-dom';
import { Counter, CounterWithHook, ErrorFallback, ErrorPage, ErrorTest, Home } from './components';
import { HelmetProvider } from 'react-helmet-async';

function App() {
  const helmetContext = {}
  return (
    <HelmetProvider context={helmetContext}>
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/firstcounter' element={<Counter />} />
          <Route path='*' element={<ErrorPage />} />
          <Route path='/greeting' element={<ErrorTest />} />
          <Route path='/secondcounter' element={<CounterWithHook />} />
        </Routes>
      </ErrorBoundary>
    </HelmetProvider>
  )
}

export default App