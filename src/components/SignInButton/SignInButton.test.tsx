import { render, screen } from '@testing-library/react';
import { mocked } from 'ts-jest/utils';
import { useSession } from 'next-auth/client';
import { SingInButton } from '.';

jest.mock('next-auth/client')

describe('SignInButton component', () => {

    test('renders correctly when user is not authenticated', () => {
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([null, false])

        render(<SingInButton />)
    
        expect(screen.getByText('Sign in with Github')).toBeInTheDocument()
    })

    test('renders correctly when user is authenticated', () => {
        const useSessionMocked = mocked(useSession)

        useSessionMocked.mockReturnValueOnce([
            { user: { name: 'John Doe', email: 'john.doe@example.com'}, expires: 'fake-expires'},
            false
        ])

        render(<SingInButton />)
    
        expect(screen.getByText('John Doe')).toBeInTheDocument()
    })
    
})