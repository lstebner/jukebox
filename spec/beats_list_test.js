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
  it("can render", function() {
    const wrapper = shallow(<BeatsList />);
    expect(wrapper).to.have.className("beats-list");
  });

  it("renders list of beats", function() {
    const beats = [
      {name: "", filename: "", is_playing: false},
      {name: "", filename: "", is_playing: false},
    ];
    const wrapper = shallow(<BeatsList beats={beats} />);
    expect(wrapper).to.have.exactly(beats.length).descendants(".beat");
  });

  it("renders the beat that is_playing with .is_playing", function() {
    const beats = [
      {name: "", filename: "", is_playing: false},
      {name: "", filename: "", is_playing: true},
    ];
    const wrapper = shallow(<BeatsList beats={beats} />);
    expect(wrapper).to.have.exactly(1).descendants(".is_playing");
  });
});



