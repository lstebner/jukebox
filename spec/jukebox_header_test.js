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

import Header from './../jukebox/header.jsx';

describe("<Header />", () => {
  it("can render", function() {
    const wrapper = shallow(<Header />);
    expect(wrapper).to.have.className("jukebox-header");
  });

  it("contains a .shuffle_btn", function() {
    const wrapper = shallow(<Header />);
    expect(wrapper).to.have.exactly(1).descendants(".shuffle_btn"); 
  });

  it("has class .is_shuffled when given prop is_shuffled=true", function() {
    const wrapper = shallow(<Header is_shuffled={true} />);
    expect(wrapper).to.have.className("is_shuffled");     
  });

  it("shuffle button has class 'unshuffle' when is_shuffled", function() {
    const wrapper = shallow(<Header is_shuffled={true} />);
    expect(wrapper.find(".shuffle_btn")).to.have.className("unshuffle");
  });

  describe("#on_shuffle_change", function() {
    it("is called when .shuffle_btn is clicked", function() {
      const on_shuffle = chai.spy();
      const wrapper = mount(<Header on_shuffle_change={on_shuffle} />); 
      wrapper.find(".shuffle_btn").simulate("click");
      expect(on_shuffle).to.have.been.called();
    });

    it("passes callback true if not is_shuffled", function() {
      let on_shuffle = chai.spy();
      const wrapper = mount(<Header is_shuffled={true} on_shuffle_change={on_shuffle} />); 
      wrapper.find(".shuffle_btn").simulate("click");
      expect(on_shuffle).to.have.been.called.with(false);
    });

    it ("passes callback false if is_shuffled", function() {
      let on_shuffle = chai.spy();
      const wrapper = mount(<Header is_shuffled={false} on_shuffle_change={on_shuffle} />); 
      wrapper.find(".shuffle_btn").simulate("click");
      expect(on_shuffle).to.have.been.called.with(true);
    });
  });
});



