var body = $response.body;
var obj = JSON.parse(body);

obj.premium = true,
obj.plan = "Premium_trial_opt_out",
obj.plan_display_name = "Premium+ Concerts",
obj.plan_begins_at": 1654698282,
obj.plan_ends_at = 1656771877,
obj.plan_renews_at = 1655907877,
obj.plan_canceled_at = null,
obj.previous_plan = "Free",

obj.plan_subscription_type = "apple",
obj.plan_product_id = "com.idagio.ios.gch.1mo.trial14",
obj.features = {
    "full_catalogue": true,
    "streaming_to_all_external_players": true,
    "audio_quality": [50, 70, 90],
    "lossless_as_gift": false,
    "allow_playback_skip": true,
    "skip_limits": {
      "enabled": false,
      "max_skips": 0,
      "reset_interval_seconds": 0,
      "tooltip_positions": []
    },
    "change_playback_position": true,
    "play_individual_tracks": true,
    "offline_listening": true,
    "user_collections": true,
    "user_playlists": true,
    "interactive_player_queue": true,
    "collections": {
      "access_limit": null,
      "show_albums_play_all": true,
      "show_playlists_play_all": true
    },
    "gch": {
      "allow_concert_playback": true
    },
    "max_skips": null,
    "interval_between_intermission": null
  },

body = JSON.stringify(obj);
$done({body});
