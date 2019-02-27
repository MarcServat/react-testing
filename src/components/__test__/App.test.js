import React, { Component } from 'react';
import ReacDOM from 'react-dom';
import App from '../../App';

it('shows a comment box', () => {
 const div = document.createElement('div');
 ReacDOM.render(<App/>, div);
 ReacDOM.unmountComponentAtNode(div);
});
