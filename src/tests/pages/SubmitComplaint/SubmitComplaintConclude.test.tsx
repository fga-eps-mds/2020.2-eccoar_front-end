import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter, Router } from 'react-router-dom';
import { createMemoryHistory } from 'history';
import SubmitComplaintConclude from '../../../pages/SubmitComplaint/SubmitComplaintConclude';

const mockHistoryPush = jest.fn();
const mockReactRouterDom = jest.fn();

jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom') as typeof mockReactRouterDom),
	useHistory: () => ({
		push: mockHistoryPush,
		location: {
			state: {
				success: true,
			},
		},
	}),
}));

describe('Test SubmitComplaintConclude screen', () => {
	test('test screen history', () => {
		jest.mock('history');
		render(
			<MemoryRouter>
				<Router history={createMemoryHistory()}>
					<SubmitComplaintConclude />
				</Router>
			</MemoryRouter>,
		);

		fireEvent.click(screen.getByText('Finalizar'));
		expect(mockHistoryPush).toHaveBeenCalledTimes(1);
	});
	test('test screen rendering', () => {
		render(
			<MemoryRouter>
				<Router history={createMemoryHistory()}>
					<SubmitComplaintConclude />
				</Router>
			</MemoryRouter>,
		);

		expect(
			screen.getByTestId('SubmitComplaintConclude'),
		).toBeInTheDocument();
	});
});
