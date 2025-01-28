#!/usr/bin/env bash

# Temporary paths
ART_PATH="/tmp/spotify_album_art.jpg"
CROPPED_ART_PATH="/tmp/spotify_album_art_cropped.jpg"

# Keep track of the last song to avoid redundant downloads
LAST_TRACK_FILE="/tmp/spotify_last_track.txt"

# Waybar dynamic CSS file to 'touch' so it reloads
CSS_FILE="$HOME/.config/waybar/style/\[LAU\]\ floating\ modules.css"

# 1) Check if Spotify is running
if ! playerctl -l 2>/dev/null | grep -q spotify; then
    # Print something so Waybar shows a fallback text
    echo '{"text":"No Spotify","tooltip":"Spotify not running"}'
    exit 0
fi

# 2) Grab metadata
STATUS="$(playerctl -p spotify status 2>/dev/null)"
TITLE="$(playerctl -p spotify metadata title 2>/dev/null)"
ARTIST="$(playerctl -p spotify metadata artist 2>/dev/null)"
ALBUM="$(playerctl -p spotify metadata album 2>/dev/null)"
ART_URL="$(playerctl -p spotify metadata mpris:artUrl 2>/dev/null)"

# If no title is found, bail out with a fallback
if [[ -z "$TITLE" ]]; then
    echo '{"text":"No Track","tooltip":"Nothing playing"}'
    exit 0
fi

# 3) Determine if the track changed
CURRENT_TRACK="$ARTIST - $TITLE"

if [[ ! -f "$LAST_TRACK_FILE" ]] || [[ "$(cat "$LAST_TRACK_FILE")" != "$CURRENT_TRACK" ]]; then
    # Save the new track in LAST_TRACK_FILE
    echo "$CURRENT_TRACK" > "$LAST_TRACK_FILE"

    # 4) Download and crop new album art
    if [[ -n "$ART_URL" ]]; then
        curl -s "$ART_URL" -o "$ART_PATH"
        # Use 'magick' for ImageMagick 7
        magick "$ART_PATH" -gravity center -crop 400x250+0+0 "$CROPPED_ART_PATH"
    else
        cp "$HOME/.config/rofi/images/default_album_art.jpg" "$CROPPED_ART_PATH"
    fi

    # 5) Touch the CSS so Waybar reloads the background
if [[ ! -f "$LAST_TRACK_FILE" ]] || [[ "$(cat "$LAST_TRACK_FILE")" != "$CURRENT_TRACK" ]]; then
        touch "$CSS_FILE"
    fi
fi

# 6) Finally, output JSON so Waybar can display track info
#    (Waybar will replace "{}", in your format, with the "text" below)
echo "{\"text\": \" ${ARTIST} - ${TITLE}\", \"tooltip\": \"${ALBUM}\"}"
