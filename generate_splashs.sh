INPUT="icon.png"
BG="#141E30"

sizes=(640x1136 750x1294 1242x2148 1125x2436 1536x2048 1668x2224 2048x2732)

for size in ${sizes[*]}
do
	convert $INPUT -background $BG -gravity center -extent $size "launch-$size.png"
done
