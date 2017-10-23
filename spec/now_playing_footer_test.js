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

import NowPlayingFooter from './../jukebox/now_playing_footer.jsx';

describe("<NowPlayingFooter />", function() {
  it("can render", function() {
    const wrapper = shallow(<NowPlayingFooter />);
    expect(wrapper).to.have.className("now-playing-footer");
  });
});


