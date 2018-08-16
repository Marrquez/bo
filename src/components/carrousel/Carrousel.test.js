import React from 'react';
import ReactDOM from 'react-dom';
import Carrousel from './Carrousel';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Carrousel />, div);
  ReactDOM.unmountComponentAtNode(div);
});
