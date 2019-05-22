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

  it('check open button call', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<Controls closed={true} toggleClosed={mockFn} />)

    const openButton = getByText('Open Gate');

    fireEvent.click(openButton);

    expect(mockFn).toHaveBeenCalled();
  })

  it('check unlock button call', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<Controls closed={true} locked={true} toggleLocked={mockFn} />)

    const unlockButton = getByText('Unlock Gate');

    fireEvent.click(unlockButton);

    expect(mockFn).toHaveBeenCalled();
  })

  it('check lock button call', () => {
    const mockFn = jest.fn();
    const { getByText } = render(<Controls closed={true} locked={false} toggleLocked={mockFn} />)

    const lockButton = getByText('Lock Gate');

    fireEvent.click(lockButton);

    expect(mockFn).toHaveBeenCalled();
  })
 

})