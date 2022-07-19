import { render } from '@testing-library/react';
import SearchBar from './rating_ and_review/Review_List/SearchBar';

describe('Input Component', () => {
  it('rendered component', () => {
    const {getByTestId} = render(<SearchBar />)
    const input = getByTestId('searchbar')
    //when you test something to be true or not
    expect(input).toBeTruthy()
  })
});