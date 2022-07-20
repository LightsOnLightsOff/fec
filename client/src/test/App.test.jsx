import { render, screen } from '@testing-library/react';
import React from 'react';
import Test from '../Test.jsx';
// import App from '../index.jsx';



// describe('Addition', () => {
//   it('knows that 2 and 2 make 4', () => {
//     expect(2 + 2).toBe(4);
//   });
// });
// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
// });


describe('Search Bar tests', () => {
    it('should contains the heading 1', () => {
    render(<Test />);
        const heading = screen.getByText("Hello world! I am using React");
        expect(heading).toBeInTheDocument()
    });
});