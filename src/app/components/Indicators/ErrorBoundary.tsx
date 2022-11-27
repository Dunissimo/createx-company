import { Component, ErrorInfo, ReactNode } from "react";
import ErrorIndicator from "./ErrorIndicator";

interface IProps {
  children?: ReactNode;
}

interface IState {
  hasError: boolean;
}

class ErrorBoundary extends Component<IProps, IState> {
  state: IState = {
    hasError: false,
  };

  public static getDerivedStateFromError(_: Error): IState {
    // Update state so the next render will show the fallback UI.
    return { hasError: true };
  }

  componentDidCatch(error: Error, errorInfo: ErrorInfo): void {
    console.error("ERROR_BOUNDARY > Uncaught error:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return <ErrorIndicator />;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
