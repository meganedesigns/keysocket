Global keyboard bindings to control your Chrome-based music player.
Allows your keyboard media keys (play/pause, next, previous) to work
when you're listening to music on various streaming websites.

# Supported Sites
   * 8tracks
   * 22tracks
   * Amazon Cloud Player
   * Bandcamp
   * Birp
   * Bop
   * Bugs Music
   * Chrome Built-In Player
   * Comcast/Xfinity
   * Deezer
   * Digitally Imported (di.fm)
   * Gaana.com
   * Google Play Music
   * Groove Music
   * Hype Machine
   * iloveradio.de
   * Jamstash
   * Jango.com
   * JB Hi-Fi Now
   * Laracasts
   * Livestream.com
   * Mixcloud
   * Music Choice
   * Myspace
   * Myzuka.fm
   * Naxos Music Library
   * Netflix
   * Noon Pacific
   * NRK Radio
   * Ok.ru
   * Overcast
   * Pandora
   * Phish Tracks
   * Picarto.tv
   * Plex
   * Pocketcasts.com
   * Prostopleer
   * Qobuz
   * Rdio
   * Relax-Hub.com
   * Saavn.com
   * serversforhackers.com
   * Slacker
   * Sirius XM Radio
   * SomaFM
   * Songza
   * Soundcloud
   * Spotify
   * Spreaker
   * Streamsquid
   * Subsonic (and Madsonic)
   * Superplayer.fm
   * Synology Audio Station v.5
   * testdrivenlaravel.com
   * thesixtyone
   * Tidal
   * Tracksflow.com
   * tunein.com
   * Twitch.tv
   * Ustream.tv
   * vk.com (Vkontakte)
   * Xiami Music
   * YouTube
   * Zvooq
   * Яндекс.Музыка (Yandex.Music)
   * Яндекс.Радио (Yandex.Radio)

# Usage

1. Download or clone this repo locally
2. Open a browser tab to [chrome://extensions](chrome://extensions)
3. Click `Developer mode` in the top right
4. Click `Load unpacked extension…` and select the extension’s directory
5. Your extension should now appear at the top of the list
6. Edit the `Keyboard shortcuts` to give Keysocket 'Global' permissions
    * Open a browser tab to [chrome://extensions](chrome://extensions)
    * Scroll to the bottom & click `Keyboard shortcuts`
    * Find `Keysocket Media Keys` and change each desired key to `Global`
    
*Note: After updating the extension with new supported sites, you will need to return to [chrome://extensions](chrome://extensions) and reload the page. Chrome will reload your extension.*

# API

Keysocket also provides an API that websites can use to bind their
players without the need to wait for their PR to be accepted and
released in the Chrome Webstore extension.  Keysocket fires events
for each media key, which the website can add event listeners for.
Below is an example from http://www.relax-hub.com, written by the
current project maintainer, Feedbee:

```javascript
// Web Page Media Control API interaction (v0.4)
// https://github.com/feedbee/web-page-media-control-api-spec
// for Key Socket Media Keys Chrome extension
// https://chrome.google.com/webstore/detail/key-socket-media-keys/fphfgdknbpakeedbaenojjdcdoajihik?hl=en

document.addEventListener("MediaPlayPause", function () {
  playerCollection.send("toggle");
});
document.addEventListener("MediaStop", function () {
  playerCollection.send("stop");
});
document.addEventListener("MediaPrev", function () {
  var player = playerCollection.getPrevPlayer();
  if (player) {
      player.send("play");
  }
});
document.addEventListener("MediaNext", function () {
  var player = playerCollection.getNextPlayer();
  if (player) {
      player.send("play");
  }
});
```

# Please contribute!

* Looking for adapters for other music players.

[crx]: https://chrome.google.com/webstore/detail/fphfgdknbpakeedbaenojjdcdoajihik
