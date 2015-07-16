function	buffer_parser_map_init(buffer, map, y)
{
    var	to_y;

    to_y = 0;
    while (to_y < y)
	{
	    map[to_y] = [];
	    to_y++;
	}
    return (map);
}

function	echo_map(map)
{
    var	y;

    y = 0;
    while (map[y])
	console.log(map[y++]);
    return (0);
}

function	echo_parser_success(map, y)
{
    var	to_y;

    console.log("i parsed the map ! check out this badass double array !:");
    to_y = 0;
    while (to_y < y)
	console.log(map[to_y++]);
    return (0);
}

function	buffer_parser(buffer, x, y)
{
    var	map;
    var	to_x;
    var	to_y;
    var	i;

    map = [[]]
    to_x = 0;
    to_y = 0;
    i = 0;
    map = buffer_parser_map_init(buffer, map, y);
    while (buffer[i])
    {
	if (buffer[i] == '\n')
	    {
		i++;
		to_y++;
		to_x = 0;
	    }
	if (buffer[i])
	    map[to_y][to_x] = buffer[i] * 1;
	to_x++;
	i++;
    }
    return (map);
}
