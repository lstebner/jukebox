require("./jukebox.less")

import React from 'react'
import types from 'prop-types'
import {Header, PlaylistPills, BeatsList, NowPlayingFooter} from './jukebox-components.jsx'

class Jukebox extends React.Component {
  static propTypes = {
    jukeboxdata: types.object,
  }

  static defaultProps = {
    jukeboxdata: {},
  }

  constructor(props) {
    super(props)

    this.playlist_keys = []
    this.playlists = []
    this.songs = []

    this.state = {
      is_playing: false,
      now_playing_track_id: -1,
      songs: [],
      playlists: [],
    }
  }

  componentDidMount() {
    this.parse_data(this.props.jukeboxdata)
    this.load_material_icons()
  }

  load_material_icons() {
    const tag = document.createElement("link")
    tag.href = "https://fonts.googleapis.com/icon?family=Material+Icons"
    tag.rel = "stylesheet"
    const head = document.getElementsByTagName("head")[0]
    head.appendChild(tag)
  }

  render() {
    return (
      <div className="jukebox">
        {this.render_audio_tag()}
        <Header />
        <PlaylistPills playlists={this.state.playlists} />
        <BeatsList beats={this.state.songs} />
        {this.render_now_playing()}
      </div>
    )
  }

  render_audio_tag() {
    return (
      <audio controls preload="auto" autobuffer="true">
        <source src={this.state.current_track_filename} type={`audio/${this.state.current_track_filetype}`} />
      </audio>
    )
  }

  render_now_playing() {
    if (this.state.is_playing) {
      return (
        <NowPlayingFooter />
      )
    }
  }

  parse_data(data) {
    this.playlist_keys = []
    this.playlists = []
    this.songs = []

    //for (let playlist in Object.keys(data.songs)) {
    for (let playlist in data.songs) {
      this.add_playlist(playlist)
      for (let i = 0; i < data.songs[playlist].length; i++) {
        this.add_song(data.songs[playlist][i], playlist)
      }
    }

    this.setState({
      playlists: this.playlists,
      songs: this.songs,
    })
  }

  add_playlist(playlist, name) {
    if (this.playlist_keys.indexOf(playlist) < 0) {
      this.playlist_keys.push(playlist)
      this.playlists.push({
        key: playlist,
        name: name || playlist.replace(/_/g, " "),
      })

      return true
    }
    else {
      return false
    }
  }

  add_song(song, playlist) {
    if (typeof song.tags === "undefined") {
      song.tags = []
    }

    song.name = song.name || song.filepath
    song.filename = `${song.key}/${song.filepath}`
    song.tags.push(playlist)
    song.is_playing = false

    this.songs.push(song)
  }
}

module.exports = Jukebox
