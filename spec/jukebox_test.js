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
import {Header, BeatsList, PlaylistPills, NowPlayingFooter} from './../jukebox-components';

describe("<Jukebox />", function() {
  it("can render", function() {
    const wrapper = shallow(<Jukebox />);
    expect(wrapper).to.have.className("jukebox");
  });

  it("contains a <Header>", function() {
    const wrapper = shallow(<Jukebox />);
    expect(wrapper).to.contain(<Header/>);
  });

  it("contains a <BeatsList>", function() {
    const wrapper = shallow(<Jukebox />);
    expect(wrapper).to.contain(<BeatsList/>);
  });

  it("contains a <NowPlayingFooter> when state.is_playing", function() {
    const wrapper = mount(<Jukebox />);
    wrapper.setState({ is_playing: true });
    expect(wrapper).to.contain(<NowPlayingFooter/>);
  });

  it("contains a <PlaylistPills>", function() {
    const wrapper = shallow(<Jukebox />);
    expect(wrapper).to.contain(<PlaylistPills />);
  });
});


