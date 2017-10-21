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

describe("<BeatsList />", function() {
  function get_beats() {
    return [
      {name: "", filename: "", is_playing: false},
      {name: "", filename: "", is_playing: true},
    ];
  }

  it("can render", function() {
    const wrapper = shallow(<BeatsList />);
    expect(wrapper).to.have.className("beats-list");
  });

  it("renders list of beats", function() {
    const beats = get_beats();
    const wrapper = shallow(<BeatsList beats={beats} />);
    expect(wrapper).to.have.exactly(beats.length).descendants(".beat");
  });

  it("renders the beat that is_playing with .is_playing", function() {
    const beats = get_beats();
    const wrapper = shallow(<BeatsList beats={beats} />);
    expect(wrapper).to.have.exactly(1).descendants(".is_playing");
  });

  it("fires handle_beat_clicked when a .beat is clicked");

  it("renders a list of associated tags for each beat");

  it("fires handle_tag_clicked when a .beat .tag is clicked");
});



