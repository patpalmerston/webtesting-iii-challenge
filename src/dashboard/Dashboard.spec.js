import React from 'react';
import ReactDOm from 'react-dom';
import { render, fireEvent  } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Controls from './../controls/Controls';
import Display from './../display/Display';

describe('dashboard component', () => {

  it('check close button call', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<Controls toggleClosed={mockFn} />)

    const closeButton = getByText('Close Gate');

    fireEvent.click(closeButton);

    expect(mockFn).toHaveBeenCalled();
  })


})