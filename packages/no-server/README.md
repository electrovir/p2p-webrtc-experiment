# no-server

A minimal-dependency UI and controller for setting up a peer-to-peer WebRTC connection without _any_ servers at all.

This only establishes a connection between 2 peers. To establish a connection with multiple peers, a brand new `RTCPeerConnection` instance needs to be constructed for each peer-to-peer connection. (This example only constructs a single `RTCPeerConnection` instance.)
