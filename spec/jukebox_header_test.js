import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount, shallow, render} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

const {expect} = chai;

import {Header} from './../jukebox-components';

describe("<Header />", () => {
  it("can render", () => {
    const wrapper = shallow(<Header />);
    expect(wrapper).to.have.className("jukebox-header");
  });
});


