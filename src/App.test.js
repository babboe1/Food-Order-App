import { render, screen } from '@testing-library/react';
import App from './App';
import AvailableMeals from './components/Meals/AvailableMeals/AvailableMeals';

test('renders app', () => {
   render(<App />);
   const titleElement = screen.getByText(/ReactMeals/i);
   expect(titleElement).toBeInTheDocument();
});
