#!/bin/bash

# Get metadata
TITLE=$(playerctl metadata title 2>/dev/null)
ARTIST=$(playerctl metadata artist 2>/dev/null)
ALBUM=$(playerctl metadata album 2>/dev/null)
ART_URL=$(playerctl metadata mpris:artUrl 2>/dev/null)

# Check if there's any media playing
if [ -z "$TITLE" ]; then
  notify-send "Playerctl" "No media is currently playing"
  exit 0
fi

# Download the album art
ART_PATH="/tmp/album_art.jpg"
curl -s "$ART_URL" -o "$ART_PATH"

# Create options for playback controls
OPTIONS=$(cat <<EOF
<img>$ART_PATH</img>
<b>🎵 Song:</b> $TITLE
<b>🎤 Artist:</b> $ARTIST
<b>💿 Album:</b> $ALBUM
⏮ Previous
⏸ Play/Pause
⏭ Next
🔀 Shuffle
🔁 Repeat
EOF
)

# Display the popup using Rofi
ACTION=$(echo -e "$OPTIONS" | rofi -dmenu -markup-rows -theme ~/.config/rofi/player.rasi -p "Now Playing:")

# Handle button actions
case $ACTION in
  "⏮ Previous") playerctl previous ;;
  "⏸ Play/Pause") playerctl play-pause ;;
  "⏭ Next") playerctl next ;;
  "🔀 Shuffle") playerctl shuffle ;;
  "🔁 Repeat") playerctl loop ;;
  *) exit 0 ;;
esac
