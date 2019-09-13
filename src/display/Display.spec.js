import React from 'react';
import { render } from 'react-testing-library';
import 'jest-dom/extend-expect';
import Display from './Display';

const testData = {
  closed: true,
  locked: false
}

describe('Display Component', () => {
  it('should render on load', () => {
    render(<Display />)
    })
})