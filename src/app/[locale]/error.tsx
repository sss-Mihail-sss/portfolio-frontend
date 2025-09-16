/** biome-ignore-all lint/security/noDangerouslySetInnerHtml: Global error boundary */
'use client';

import { Component, createRef, type ErrorInfo, type ReactNode, type RefObject } from 'react';

type ErrorBoundaryProps = {
  children: ReactNode;
  onError?: (error: Error, errorInfo: ErrorInfo) => void;
};

type ErrorBoundaryState = {
  hasError: boolean;
};

export class GracefullyDegradingErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  private readonly contentRef: RefObject<HTMLDivElement | null>;

  constructor(props: ErrorBoundaryProps) {
    super(props);
    this.state = { hasError: false };
    this.contentRef = createRef();
  }

  static getDerivedStateFromError(_: Error): ErrorBoundaryState {
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo) {
    if (this.props.onError) {
      this.props.onError(error, errorInfo);
    }
  }

  render() {
    if (this.state.hasError) {
      return (
        <>
          <div
            ref={this.contentRef}
            suppressHydrationWarning
            dangerouslySetInnerHTML={{
              __html: this.contentRef.current?.innerHTML || '',
            }}
          />
          <div className="fixed right-0 bottom-0 left-0 bg-red-600 px-6 py-4 text-center text-white">
            <p className="font-semibold">An error occurred during page rendering</p>
          </div>
        </>
      );
    }

    return <div ref={this.contentRef}>{this.props.children}</div>;
  }
}

export default GracefullyDegradingErrorBoundary;
