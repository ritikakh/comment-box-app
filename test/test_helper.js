import React from 'react';
import jsdom from 'jsdom';
import jquery from 'jquery';
import ReactDOM from 'react-dom';
import TestUtils from 'react-dom/test-utils';
import chai, { expect } from 'chai';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from '../src/reducers';
import chaiJquery from 'chai-jquery';




//Set up testing environment to run like a browser in the command line
global.document = jsdom.jsdom('<!doctype html><html><body></body></html>');
global.window = global.document.defaultView;
const $ = jquery(global.window); //defining our own instance of jquery



// build 'renderComponent' helper that should render a given react class
// ComponentClass is the class hat we build
//componentInstance is instance ofthe above class
function renderComponent(ComponentClass, props, state) {
    const componentInstance = TestUtils.renderIntoDocument(
        <Provider store={createStore(reducers, state)}>
          <ComponentClass {...props} />
        </Provider>
    );

    return $(ReactDOM.findDOMNode(componentInstance)); //produces HTML wrapped in jquery

}


// build helper for simulating events
$.fn.simulate = function(eventName, value) {
  if (value) {
    this.val(value);
  }
  TestUtils.Simulate[eventName](this[0]);
}

//to call simulate
// $('div').simulate

// set up chai j-query
chaiJquery(chai, chai.util, $);




export { renderComponent, expect};










