import React, { Component, ErrorInfo, ReactNode } from 'react'

interface ErrorBoundaryProps {
  children: ReactNode
  fallbackTitle?: string
}

interface ErrorBoundaryState {
  hasError: boolean
  error: Error | null
  errorInfo: ErrorInfo | null
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  constructor(props: ErrorBoundaryProps) {
    super(props)
    this.state = {
      hasError: false,
      error: null,
      errorInfo: null,
    }
  }

  static getDerivedStateFromError(error: Error): Partial<ErrorBoundaryState> {
    return { hasError: true, error }
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    console.error('ErrorBoundary caught an unhandled error:', error, errorInfo)
    this.setState({ errorInfo })
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null, errorInfo: null })
    window.location.hash = '#/'
  }

  handleReload = async () => {
    try {
      if ('serviceWorker' in navigator) {
        const registrations = await navigator.serviceWorker.getRegistrations()
        for (const reg of registrations) {
          await reg.update()
        }
      }
    } catch {
      // Ignore
    }
    window.location.reload()
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="card" style={{ maxWidth: '640px', margin: '2rem auto', padding: '1.75rem' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1rem' }}>
            <span style={{ fontSize: '2rem' }}>⚠️</span>
            <div>
              <h2 style={{ margin: 0, fontSize: '1.35rem' }}>
                {this.props.fallbackTitle || 'Unable to display this view'}
              </h2>
              <p className="muted-sm" style={{ margin: '0.25rem 0 0 0' }}>
                An unexpected display error occurred. Your student learning progress is safe in local storage.
              </p>
            </div>
          </div>

          {this.state.error && (
            <div
              style={{
                background: 'var(--surface-alt)',
                border: '1px solid var(--border)',
                borderRadius: '6px',
                padding: '0.75rem 1rem',
                fontSize: '0.85rem',
                color: 'var(--text)',
                marginBottom: '1.25rem',
                overflowX: 'auto',
              }}
            >
              <strong>Error:</strong> {this.state.error.message || String(this.state.error)}
              {this.state.errorInfo?.componentStack && (
                <details style={{ marginTop: '0.5rem' }}>
                  <summary style={{ cursor: 'pointer', color: 'var(--primary-bright)', fontSize: '0.8rem' }}>
                    View Technical Details
                  </summary>
                  <pre style={{ margin: '0.5rem 0 0 0', fontSize: '0.75rem', whiteSpace: 'pre-wrap' }}>
                    {this.state.errorInfo.componentStack}
                  </pre>
                </details>
              )}
            </div>
          )}

          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
            <button
              type="button"
              className="btn btn-primary"
              onClick={this.handleReset}
            >
              ← Back to Student Dashboard
            </button>
            <button
              type="button"
              className="btn btn-secondary"
              onClick={this.handleReload}
            >
              🔄 Reload Application
            </button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
