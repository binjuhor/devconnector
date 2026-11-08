import { render, screen } from '@testing-library/react';
import { configureStore } from '@reduxjs/toolkit';
import { Provider } from 'react-redux';
import { MemoryRouter, Route, Routes } from 'react-router-dom';
import rootReducer from '../../reducers';
import { AUTH_ERROR, USER_LOADED } from '../../actions/types';
import Landing from '../layout/Landing';
import AppRoutes from './Routes';

vi.mock('axios', () => ({
    default: {
        get: vi.fn(() => Promise.reject({ response: { status: 400, statusText: 'Bad Request', data: {} } })),
        defaults: { headers: { common: {} } }
    }
}));

const renderAt = (path, authAction) => {
    const store = configureStore({ reducer: rootReducer });
    if (authAction) store.dispatch(authAction);
    return render(
        <Provider store={store}>
            <MemoryRouter initialEntries={[path]}>
                <Routes>
                    <Route path='/' element={<Landing/>}/>
                    <Route path='/*' element={<AppRoutes/>}/>
                </Routes>
            </MemoryRouter>
        </Provider>
    );
};

describe('routing', () => {
    it('renders the landing page at /', () => {
        renderAt('/', { type: AUTH_ERROR });
        expect(screen.getByRole('heading', { name: 'Developer Connector' })).toBeInTheDocument();
    });

    it('redirects unauthenticated users from private routes to /login', () => {
        renderAt('/dashboard', { type: AUTH_ERROR });
        expect(screen.getByRole('heading', { name: /sign in/i })).toBeInTheDocument();
    });

    it('redirects authenticated users from / to the dashboard', async () => {
        renderAt('/', { type: USER_LOADED, payload: { name: 'Tester' } });
        expect(await screen.findByRole('heading', { name: 'Dashboard' })).toBeInTheDocument();
    });

    it('renders the not-found page for unknown routes', () => {
        renderAt('/nope', { type: AUTH_ERROR });
        expect(screen.getByText(/page not found/i)).toBeInTheDocument();
    });
});
