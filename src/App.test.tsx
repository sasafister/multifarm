import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { dataset } from './utils/dataset';

test('renders homepage title', () => {
  render(<App />);
  const linkElement = screen.getByText(/Multifarm Frontend Coding Task/i);
  expect(linkElement).toBeInTheDocument();
});

test('dataset returns increase by 5%', () => {
  const nr = 2
  const ds = dataset(1)
  expect(ds).toEqual([1.05, 1.1025, 1.15763, 1.21551, 1.27628, 1.3401, 1.4071, 1.47746, 1.55133, 1.62889, 1.71034, 1.79586])
});
