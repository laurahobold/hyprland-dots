#!/usr/bin/env bash
source "$HOME"/.config/rofi/applets/shared/theme.bash
theme="$type/$style"

# Check if Spotify is running
if ! playerctl -l | grep -q spotify; then
    rofi -theme-str 'textbox-prompt-colon {str: "";}' \
        -theme-str 'listview {lines: 1;}' \
        -dmenu \
        -p "Spotify" \
        -mesg "Spotify is not running" \
        -theme "$theme"
    exit 0
fi

# Spotify metadata
STATUS=$(playerctl -p spotify status 2>/dev/null)
TITLE=$(playerctl -p spotify metadata title 2>/dev/null)
ARTIST=$(playerctl -p spotify metadata artist 2>/dev/null)
ALBUM=$(playerctl -p spotify metadata album 2>/dev/null)
ART_URL=$(playerctl -p spotify metadata mpris:artUrl 2>/dev/null)

# Album art download and crop
# Album art download and crop
#!/usr/bin/env bash

# Paths for album art
ART_PATH="/tmp/spotify_album_art.jpg"
CROPPED_ART_PATH="/tmp/spotify_album_art_cropped.jpg"

# Spotify metadata
ART_URL=$(playerctl -p spotify metadata mpris:artUrl 2>/dev/null)

# Download and crop the album art
if [[ -n "$ART_URL" ]]; then
    curl -s "$ART_URL" -o "$ART_PATH"
    # Ensure cropping from the center to a fixed size (600x300 for example)
    magick "$ART_PATH" -gravity center -crop 400x250+0+0 "$CROPPED_ART_PATH"
else
    # Use a default fallback image if no art is available
    cp "$HOME/.config/rofi/images/default_album_art.jpg" "$CROPPED_ART_PATH"
fi


# Call the command
rofi_cmd



# Prompt and message for Rofi
PROMPT="$TITLE"
MESG="$ARTIST"

# Options
if [[ $STATUS == "Playing" ]]; then
    OPTION_1=" "
else
    OPTION_1="  "
fi
OPTION_2="󰒟 "
OPTION_3=" 󰳝 "
OPTION_4="󰳟 "

# Rofi CMD
rofi_cmd() {
    rofi -theme-str 'listview {lines: 4;}' \
        -theme-str 'textbox-prompt-colon {str: "";}' \
        -theme-str "window { background-image: url(\"$CROPPED_ART_PATH\"); }" \
        -dmenu \
        -p "$PROMPT" \
        -mesg "$MESG" \
        -markup-rows \
        -theme "$theme"
}


# Pass variables to Rofi dmenu
run_rofi() {
    echo -e "$OPTION_3\n$OPTION_1\n$OPTION_4\n$OPTION_2" | rofi_cmd
}

# Execute Command
run_cmd() {
    if [[ "$1" == '--opt1' ]]; then
        playerctl -p spotify play-pause
    elif [[ "$1" == '--opt2' ]]; then
        playerctl -p spotify stop
    elif [[ "$1" == '--opt3' ]]; then
        playerctl -p spotify previous
    elif [[ "$1" == '--opt4' ]]; then
        playerctl -p spotify next
    fi
    # Re-run the script after executing a command
}


# Actions
CHOSEN="$(run_rofi)"
case "$CHOSEN" in
    "$OPTION_1")
        run_cmd --opt1
        ;;
    "$OPTION_2")
        run_cmd --opt2
        ;;
    "$OPTION_3")
        run_cmd --opt3
        ;;
    "$OPTION_4")
        run_cmd --opt4
        ;;
esac
