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

import {TagsList} from './../jukebox-components';

describe("<TagsList />", function() {
  it("can render", function() {
    const wrapper = shallow(<TagsList />);
    expect(wrapper).to.have.className("tags-list");
  });
});



