'use client';

import React from 'react';
import ErrorMain from '@/views/error/error';

type ErrorProps = {
  error: Error;
  reset: () => void;
};

export default function Error({ error, reset }: ErrorProps) {
  return <ErrorMain errorMessage={error.message} onRetry={reset} />;
}
