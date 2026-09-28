import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import App from './App';

beforeEach(() => { window.scrollTo = jest.fn(); });

test('profile navigation opens projects and filters results', () => {
  render(<MemoryRouter><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: 'Melinda Tran' })).toBeInTheDocument();
  fireEvent.click(screen.getByRole('link', { name: 'View all projects →' }));
  fireEvent.change(screen.getByRole('textbox', { name: 'Find a project' }), { target: { value: 'Python' } });
  expect(screen.getByRole('link', { name: 'Pollution Prediction' })).toBeInTheDocument();
  expect(screen.queryByRole('link', { name: 'FlameFreeze' })).not.toBeInTheDocument();
  fireEvent.change(screen.getByRole('combobox', { name: 'Project category' }), { target: { value: 'hardware' } });
  expect(screen.getByText(/No projects match/)).toBeInTheDocument();
});

test('theme toggle and direct project route work', () => {
  render(<MemoryRouter initialEntries={['/project/flamefreeze']}><App /></MemoryRouter>);
  expect(screen.getByRole('heading', { name: 'FlameFreeze' })).toBeInTheDocument();
  expect(screen.getByRole('link', { name: 'View Project' })).toHaveAttribute('href', 'https://flamefreeze.vercel.app/');
  fireEvent.click(screen.getByRole('button', { name: 'Switch to light theme' }));
  expect(screen.getByRole('button', { name: 'Switch to dark theme' })).toBeInTheDocument();
});
