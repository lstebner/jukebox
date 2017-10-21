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

  it("renders a list of tags", function() {
    const tags = ["one", "two"];
    const wrapper = shallow(<TagsList tags={tags} />);
    expect(wrapper).to.have.exactly(1).descendants(".list_of_tags");
    expect(wrapper).to.have.exactly(tags.length).descendants(".tag");
  });

  it("triggers handle_tag_click when a tag is clicked", function() {
    const onclick = chai.spy();
    const tags = ["one", "two"];
    const wrapper = mount(<TagsList tags={tags} handle_tag_click={onclick} />);
    wrapper.find(".tag").first().simulate("click");
    expect(onclick).to.have.been.called();
  });

  it("passes handle_tag_click the tag that was clicked", function() {
    const onclick = chai.spy();
    const tags = ["one", "two"];
    const wrapper = mount(<TagsList tags={tags} handle_tag_click={onclick} />);
    wrapper.find(".tag").first().simulate("click");
    expect(onclick).to.have.been.called.with(tags[0]);
  });
});



