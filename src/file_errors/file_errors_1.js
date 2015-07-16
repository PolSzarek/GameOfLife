function	ischar(c)
{
    if (c == '0')
	return (1);
    if (c == '1')
	return (2);
    if (c == '\n')
	return (3);
    return (0);
}

function	wrong_char_and_y_calc(buffer)
{
    var	i;
    var	n;

    i = 0;
    n = 0;
    while (buffer[i])
    {
	if (!ischar(buffer[i]))
	{
	    console.log("wrong character detected, abort, abort !");
	    return (0);
	}
	if (buffer[i++] == '\n')
	    n = n + 1;
    }
    if (n < 3)
    {
	console.log("y is too short, make it longer !");
	return (0);
    }
    return (n);
}

function	x_map_calc(buffer)
{
    var	i;

    i = 0;
    while (buffer[i])
    {
	if (buffer[i] == '\n')
	{
	    if (i < 4)
	    {
		console.log("x is too short :'(");
		return (0);
	    }
	    else
		return (i);
	}
	i++;
    }
    return (0);
}

function	x_map_check(buffer, x)
{
    var	i;
    var	j;

    i = 0;
    j = 0;
    while (buffer[i])
    {
	if (buffer[i] == '\n')
	{
	    if (j < x - 1)
	    {
		console.log("x not long enough");
		return (0);
	    }
	    j = 0;
	    i++;
	}
	j++;
	i++;
    }
    console.log("that map seems valid, lemme check again just to be sure");
    return (1);
}

function	map_wall_x_checker(buffer, x, y)
{
    return (1);
}
