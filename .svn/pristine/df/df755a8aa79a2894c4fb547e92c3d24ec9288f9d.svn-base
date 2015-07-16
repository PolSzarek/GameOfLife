function	isdefined(map, x, y)
{
    if (typeof map[y] != "undefined")
	if (typeof map[y][x] != "undefined")
	    return (1);
    return (0);
}

function	does_cell_live(map, x, y)
{
    var	count;

    count = 0;
    if (typeof map[y - 1] != "undefined" && map[y - 1][x - 1] == 1)
	count++;
    if (typeof map[y - 1] != "undefined" && map[y - 1][x] == 1)
	count++;
    if (typeof map[y - 1] != "undefined" && map[y - 1][x + 1] == 1)
	count++;
    if (typeof map[y] != "undefined" && map[y][x - 1] == 1)
	count++;
    if (typeof map[y] != "undefined" && map[y][x + 1] == 1)
	count++;
    if (typeof map[y + 1] != "undefined" && map[y + 1][x - 1] == 1)
	count++;
    if (typeof map[y + 1] != "undefined" && map[y + 1][x] == 1)
	count++;
    if (typeof map[y + 1] != "undefined" && map[y + 1][x + 1] == 1)
	count++;
    if (count <= 1 && map[y][x] == 1 || count >= 4 && map[y][x] == 1)
	return (4);
    if (map[y][x] == 1 && count == 2 || count == 3)
	return (1);
    if (map[y][x] == 4)
	return (4);
    return (0);
}

function	calc_next_frame(map)
{
    var	nmap;
    var	x;
    var	y;

    x = 0;
    y = 0;
    nmap = [[]];
    while (y < 100)
	nmap[y++] = [];
    y = 0;
    while (typeof map[y] != "undefined")
    {
	while (typeof map[y][x] != "undefined")
	    {
		nmap[y][x] = does_cell_live(map, x, y);
		x++;
	    }
	x = 0;
	y++;
    }
    return (nmap);
}
