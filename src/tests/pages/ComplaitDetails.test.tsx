import { render, screen } from '@testing-library/react';
import ComplaintDetails from '../../pages/ComplaintDetails';

const mockHistoryPush = jest.fn();
jest.mock('react-router-dom', () => ({
	...(jest.requireActual('react-router-dom') as any),
	useHistory: () => ({
		push: mockHistoryPush,
	}),
	useParams: () => ({
		id: 1,
	}),
}));

describe('Test ComplaintDetails', () => {
	test('test screen rendering', () => {
		render(<ComplaintDetails />);

		expect(screen.getByTestId('ComplainDetails')).toBeInTheDocument();
	});
});