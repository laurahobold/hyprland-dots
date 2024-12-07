#!/bin/bash
# /* ---- 💫 https://github.com/JaKooLit 💫 ---- */
# Pink, Purple, and Blue Rainbow Borders Animation

function random_shade() {
        # Expanded palette of pink, purple, and blue shades
    local colors=(
        # Pinks
        "ff1493" "ff69b4" "ffc0cb" "ffb6c1" "ff85a1" "e75480" "fa8072" "ff8da1" "ff6f91"
                "ff5e78" "ff99aa" "ffccd5" "ffa6c9" "f497a9" "f88379" "ff7f7f" "ffaaaa" "ff6f61"
                "f08080" "fd5e53" "fc9c9e" "ff6fff" "ee7c9c" "ff3366" "ff5675" "ff3377"
        # Purples
        "800080" "8a2be2" "9932cc" "9400d3" "ba55d3" "dda0dd" "dda0ff" "e6e6fa" "d8bfd8"
        "da70d6" "ee82ee" "c71585" "cc99ff" "9370db" "4b0082" "6a5acd" "483d8b"
        # Blues
    )
    echo "0xff${colors[$((RANDOM % ${#colors[@]}))]}"
}

# Generate a series of random shades for the rainbow effect
active_colors=()
for i in {1..10}; do
    active_colors+=("$(random_shade)")
done

# Apply the rainbow effect to the active window border
hyprctl keyword general:col.active_border "${active_colors[*]}" 135deg

# Uncomment the section below to apply the effect to inactive borders as well
# inactive_colors=()
# for i in {1..10}; do
#     inactive_colors+=("$(random_shade)")
# done

# Apply the colors to the inactive border (optional, uncomment to enable)
# hyprctl keyword general:col.inactive_border "${inactive_colors[*]}" 270deg
