import React from 'react';
import './App.css'
import { ErrorBoundary } from 'react-error-boundary'
import { Route, Routes } from 'react-router-dom';
import { Counter, ErrorFallback, ErrorPage } from './components';
import Greeting from './components/Greetings';

function App() {
  return (
    <ErrorBoundary FallbackComponent={ErrorFallback}>
      <Routes>
        <Route path='/' element={<Counter />} />
        <Route path='*' element={<ErrorPage />} />
        <Route path='/greeting' element={<Greeting />} />
      </Routes>
    </ErrorBoundary>
  )
}

export default App