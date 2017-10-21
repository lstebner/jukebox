import React from 'react';
import chai from 'chai';
import chaiEnzyme from 'chai-enzyme';
import {mount, shallow, render} from 'enzyme';
import {configure} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });
chai.use(chaiEnzyme());

const {expect} = chai;

import Jukebox from './../jukebox';

describe("<Jukebox />", () => {
  it("can render", () => {
    const wrapper = shallow(<Jukebox />);
    expect(wrapper).to.have.className("jukebox");
  });

  it("contains a <Header>");
  it("contains a <BeatsList>");
  it("contains a <NowPlayingFooter> when state.is_playing");
  it("contains a <PlaylistPills>");
});


