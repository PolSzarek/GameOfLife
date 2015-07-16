function	map_iseven_check(buffer, x)
{
    var	i;
    var	not_x;

    i = 0;
    not_x = 0;
    while (buffer[i])
    {
	while (buffer[i++] != '\n')
	    not_x++;
	if (not_x != x)
	    {
		console.log("map is not even, fix plz");
		return (0);
	    }
	not_x = 0;
    }
    console.log("hey, that map looks even");
    return (1);
}

function	map_checker(buffer, x, y)
{
    if (!(n_end(buffer)))
	return (0);
    if (!(map_iseven_check(buffer, x)))
	return (0);
    if (!(x_map_check(buffer, x)))
	return (0);
    return (1);
}
