#!/bin/bash

# Export Wayland environment variables

pkill -x ags

# Kill all existing instances of waybar
killall waybar

# Wait to ensure waybar processes are fully killed

# Start waybar within the Wayland environment
waybar

# Allow some time for waybar to initialize
sleep 2

# Check if waybar is running and prevent ags from starting
#if pgrep -x "waybar" > /dev/null; then
#    echo "Waybar is running. Preventing ags from starting."
#else
#    echo "Waybar is not running. Starting ags."
#fi
#
#exit 0
