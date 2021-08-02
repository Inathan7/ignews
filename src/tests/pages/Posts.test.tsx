import { render, screen } from "@testing-library/react";
import { mocked } from "ts-jest/utils";
import Posts, { getStaticProps } from '../../pages/posts';

const posts = [
    { slug: 'my-new-post', title: 'My New Post', expert: 'Post excerpt', updatedAt: '10 de Abril' }
];

describe('Posts page', () => {
    test('renders correctly', () => {
        render(<Posts posts={posts} />)

        expect(screen.getByText('My New Post')).toBeInTheDocument()
    });

   
})