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

import {BeatsList, TagsList} from './../jukebox-components';

describe("<BeatsList />", function() {
  function get_beats() {
    return [
      {name: "", filename: "", tags: [], is_playing: false},
      {name: "", filename: "", tags: [], is_playing: true},
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

  it("fires handle_item_click when a .beat is clicked", function() {
    const beats = get_beats();
    const onclick = chai.spy();
    const wrapper = mount(<BeatsList beats={beats} handle_item_click={onclick} />);
    wrapper.find(".beat").first().find("a").simulate("click");
    expect(onclick).to.have.been.called();
  });

  it("renders a <TagsList> for each beat", function() {
    const beats = get_beats(); 
    beats[0].tags.push("pancakes");
    const wrapper = mount(<BeatsList beats={beats} />);
    expect(wrapper.find(".beat").first()).to.contain(<TagsList tags={beats[0].tags} />);
  });
});



