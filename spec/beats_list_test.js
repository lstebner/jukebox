import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount, shallow, render} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import spies from 'chai-spies-next';

configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());
chai.use(spies);

const {expect} = chai;

import {BeatsList} from './../jukebox-components';

describe("<BeatsList />", () => {
  it("can render", function() {
    const wrapper = shallow(<BeatsList />);
    expect(wrapper).to.have.className("beats-list");
  });
});



