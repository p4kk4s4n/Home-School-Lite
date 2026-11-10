import React from 'react'
import { describe, it, expect } from 'vitest'
import { render, screen, fireEvent } from '@testing-library/react'
import { ErrorBoundary } from '../components/ErrorBoundary'

const ProblemChild: React.FC<{ shouldThrow?: boolean }> = ({ shouldThrow }) => {
  if (shouldThrow) {
    throw new Error('Test crash in Course Map!')
  }
  return <div>Everything is working</div>
}

describe('ErrorBoundary', () => {
  it('renders children when no error occurs', () => {
    render(
      <ErrorBoundary>
        <ProblemChild shouldThrow={false} />
      </ErrorBoundary>
    )
    expect(screen.getByText('Everything is working')).toBeDefined()
  })

  it('renders fallback card when a child component throws an error', () => {
    // Suppress console.error in test output for intentional throw
    const originalConsoleError = console.error
    console.error = () => {}

    render(
      <ErrorBoundary fallbackTitle="Course Map Error">
        <ProblemChild shouldThrow={true} />
      </ErrorBoundary>
    )

    expect(screen.getByText('Course Map Error')).toBeDefined()
    expect(screen.getByText(/Test crash in Course Map!/)).toBeDefined()
    expect(screen.getByText('← Back to Student Dashboard')).toBeDefined()

    console.error = originalConsoleError
  })
})
