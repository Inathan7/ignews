import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import Post, { getServerSideProps } from '../../pages/posts/[slug]';

const post = 
    { slug: 'my-new-post', title: 'My New Post', content: '<p>Post excerpt</p>', updatedAt: '10 de Abril' };

describe('Post page', () => {
    test('renders correctly', () => {
        render(<Post post={post} />)

        expect(screen.getByText('My New Post')).toBeInTheDocument()
        expect(screen.getByText('Post excerpt')).toBeInTheDocument()
    });

   
})