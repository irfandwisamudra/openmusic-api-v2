const routes = (handler) => [
  // Routes untuk playlist
  {
    method: 'POST',
    path: '/playlists',
    handler: handler.postPlaylistHandler,
    options: { auth: 'notesapp_jwt' },
  },
  {
    method: 'GET',
    path: '/playlists',
    handler: handler.getPlaylistsHandler,
    options: { auth: 'notesapp_jwt' },
  },
  {
    method: 'DELETE',
    path: '/playlists/{id}',
    handler: handler.deletePlaylistByIdHandler,
    options: { auth: 'notesapp_jwt' },
  },
  // Routes untuk lagu di dalam playlist
  {
    method: 'POST',
    path: '/playlists/{id}/songs',
    handler: handler.postSongToPlaylistHandler,
    options: { auth: 'notesapp_jwt' },
  },
  {
    method: 'GET',
    path: '/playlists/{id}/songs',
    handler: handler.getSongsFromPlaylistHandler,
    options: { auth: 'notesapp_jwt' },
  },
  {
    method: 'DELETE',
    path: '/playlists/{id}/songs',
    handler: handler.deleteSongFromPlaylistHandler,
    options: { auth: 'notesapp_jwt' },
  },
];

module.exports = routes;
