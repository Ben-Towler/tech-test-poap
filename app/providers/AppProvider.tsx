"use client";

import { ErrorBoundary } from 'react-error-boundary';
import { ReactNode } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query'

const queryClient = new QueryClient();

const ErrorFallback = () => (
  <div
    className="text-red-500 w-screen h-screen flex flex-col justify-center items-center"
    role="alert"
  >
    <h2 className="text-lg font-semibold">Ooops, something went wrong</h2>
    <button onClick={() => window.location.assign(window.location.origin)}>
      Refresh
    </button>
  </div>
);

type AppProviderProps = {
  children: ReactNode;
};

export const AppProvider = ({ children }: AppProviderProps) => (
  <ErrorBoundary FallbackComponent={ErrorFallback}>
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  </ErrorBoundary>
);
