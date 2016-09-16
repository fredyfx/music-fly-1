
post '/api/v1/playlist/:name' do
  halt 404, "No current account to save playlist" unless session["user"] 
  playlist_name = params["name"] 
  playlist = create_new_playlist(playlist_name)
end

post '/api/v1/playlist/:name/song' do
  song = JSON.parse(request.body.read)
  name = params["name"]
  add_song_to_playlist(name, song)

end

get '/api/v1/playlist' do 
  halt 404, "No current user logged in" unless session["user"]

  playlists = get_current_playlists
  return playlists.to_json
end

delete '/api/v1/playlist/:name' do
  halt 404, "No current user logged in" unless session["user"]
  delete_a_playlist(params["name"])
end