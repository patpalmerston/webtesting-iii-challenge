import React from 'react';

import { render, fireEvent  } from 'react-testing-library';
import 'react-testing-library/cleanup-after-each'
import renderer from 'react-test-renderer';
import 'jest-dom/extend-expect';
import Controls from './../controls/Controls';

describe('Controls Module', () => {

  it('should render Controls Module', () => {
    render(<Controls />);
  })
  
})
