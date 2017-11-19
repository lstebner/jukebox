import React from 'react'
import chai from 'chai'
import chaiEnzyme from 'chai-enzyme'
import {mount, shallow, render} from 'enzyme'
import {configure} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'

configure({ adapter: new Adapter() })
chai.use(chaiEnzyme())

const {expect} = chai

import Jukebox from './../jukebox/jukebox.jsx'
import {Header, BeatsList, PlaylistPills, NowPlayingFooter} from './../jukebox/jukebox-components.jsx'

describe("<Jukebox />", function() {
  const find_playlist = function(name, playlists) {
    const find_playlist_fn = function(item) {
      return item.key === name
    }

    return playlists.find(find_playlist_fn)
  }

  describe("#render", function() {
    it("renders", function() {
      const wrapper = shallow(<Jukebox />)
      expect(wrapper).to.have.className("jukebox")
    })

    it("contains <Header>", function() {
      const wrapper = shallow(<Jukebox />)
      expect(wrapper).to.contain(<Header/>)
    })

    it("contains <BeatsList>", function() {
      const wrapper = shallow(<Jukebox />)
      expect(wrapper).to.contain(<BeatsList/>)
    })

    it("contains <NowPlayingFooter> when state.is_playing", function() {
      const wrapper = mount(<Jukebox />)
      wrapper.setState({ is_playing: true })
      expect(wrapper).to.contain(<NowPlayingFooter/>)
    })

    it("contains <PlaylistPills>", function() {
      const wrapper = shallow(<Jukebox />)
      expect(wrapper).to.contain(<PlaylistPills />)
    })

    it("contains an <audio> tag", function() {
      const wrapper = shallow(<Jukebox />)
      expect(wrapper).to.have.exactly(1).descendants("audio")
    })
  })

  it("calls #load_material_icons on mount", function() {
    class TestJukebox extends Jukebox {
      load_material_icons = chai.spy()
    }

    const wrapper = mount(<TestJukebox/>)
    expect(wrapper.instance().load_material_icons).to.have.been.called
  })

  describe("#add_playlist", function() {
    it("returns true when a playlist is added", function() {
      const wrapper = mount(<Jukebox/>)
      const test_playlist = "greatest_hits"
      const result = wrapper.instance().add_playlist(test_playlist)
      expect(result).to.be.true
    })

    it("adds a playlist to playlist_keys", function() {
      const wrapper = mount(<Jukebox/>)
      const test_playlist = "greatest_hits"
      wrapper.instance().add_playlist(test_playlist)
      expect(wrapper.instance().playlist_keys.includes(test_playlist)).to.be.true
    })

    it("adds a playlist to playlists", function() {
      const wrapper = mount(<Jukebox/>)
      const test_playlist = "greatest_hits"
      wrapper.instance().add_playlist(test_playlist)
      const playlist = find_playlist(test_playlist, wrapper.instance().playlists)
      expect(typeof playlist).to.equal("object", "test_playlist not found in playlists")
    })

    it("will not return false when a playlist is not added", function() {
      const wrapper = mount(<Jukebox/>)
      const test_playlist = "greatest_hits"
      wrapper.instance().add_playlist(test_playlist)
      const result = wrapper.instance().add_playlist(test_playlist)
      expect(result).to.be.false
    })

    it("will not add a playlist twice", function() {
      const wrapper = mount(<Jukebox/>)
      const test_playlist = "greatest_hits"
      for (let i = 0; i < 5; i++) {
        wrapper.instance().add_playlist(test_playlist)
      }
      const result = wrapper.instance().add_playlist(test_playlist)
      let num_times = 0
      for (let key of wrapper.instance().playlist_keys) {
        if (key === test_playlist) {
          num_times++
        }
      }
      expect(num_times).to.equal(1)
    })

    it("will take the playlist name as an optional parameter", function() {
      const wrapper = mount(<Jukebox/>)
      const test_playlist = "greatest_hits"
      const test_name = "Great Songs"
      wrapper.instance().add_playlist(test_playlist, test_name)
      const playlist = find_playlist(test_playlist, wrapper.instance().playlists)
      expect(playlist.name).to.equal(test_name)
    })

    it("will auto generate the name from the key if not given a name", function() {
      const wrapper = mount(<Jukebox/>)
      const test_playlist = "greatest_hits"
      const expected_name = "greatest hits"
      wrapper.instance().add_playlist(test_playlist)
      const playlist = find_playlist(test_playlist, wrapper.instance().playlists)
      expect(playlist.name).to.equal(expected_name)
    })
  })

  describe("#add_song", function() {
  })
})


