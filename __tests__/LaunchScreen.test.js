import React from 'react';
import { render, screen } from '@testing-library/react';
import LaunchScreen from '../src/components/LaunchScreen';

describe('LaunchScreen Component', () => {
    it('renders the title', () => {
        render(<LaunchScreen title="Loading App..." />);
        expect(screen.getByText(/Loading App.../i)).toBeInTheDocument();
    });

    it('renders a spinner when `showSpinner` is true', () => {
        render(<LaunchScreen showSpinner={true} />);
        expect(screen.getByRole('progressbar')).toBeInTheDocument();
    });

    it('does not render a spinner when `showSpinner` is false', () => {
        render(<LaunchScreen showSpinner={false} />);
        expect(screen.queryByRole('progressbar')).not.toBeInTheDocument();
    });
});