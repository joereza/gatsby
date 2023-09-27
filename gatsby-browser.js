import React from 'react';
import { Layout } from './src/components/layout.tsx';

export function wrapPageElement({ element, props }) {
  return <Layout {...props}>{element}</Layout>;
}
