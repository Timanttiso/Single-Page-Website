import React from "react";
import { render, screen } from '@testing-library/react';
import Header from '../src/components/Header';

test('Welcome to Our Company website', () => {
  render(<Header/>);
  const element = screen.getByText(/Welcome to Our Company website/i);
  expect(element).toBeInTheDocument();
});