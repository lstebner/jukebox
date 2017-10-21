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

import {PlaylistPills} from './../jukebox-components';

describe("<PlaylistPills />", function() {
  it("can render", function() {
    const wrapper = shallow(<PlaylistPills />);
    expect(wrapper).to.have.className("playlist-pills");
  });

  it("renders a .playlist_pill for each playlist", function() {
    const playlists = [
      { name: "" },
      { name: "" },
      { name: "" },
    ];
    const wrapper = shallow(<PlaylistPills playlists={playlists} />);
    expect(wrapper).to.have.exactly(playlists.length).descendants(".playlist_pill");
  });

  it("marks the selected playlist with .is_selected", function() {
    const playlists = [
      { name: "" },
      { name: "" },
      { name: "", is_selected: true },
    ];
    const wrapper = shallow(<PlaylistPills playlists={playlists} />);
    expect(wrapper).to.have.exactly(1).descendants(".playlist_pill.is_selected");
  });

  it("triggers handle_playlist_selected when a .playlist_pill is clicked");
});



