function	draw_square(img, cell, color)
{
    var	x;
    var	y;

    x = cell.x;
    y = cell.y;
    while (y < cell.size + cell.y)
	{
	    while (x < cell.size + cell.x)
	    {
		img = piximage(img, x, y, color);
		x++;
	    }
	    x = cell.x;
	    y++;
	}
    return (img);
}

function	draw_cell(img, cell_size, x, y, color)
{
    var	cell;

    cell =
	{
	    x:		0,
	    y:		0,
	    size:	cell_size
	}
    cell.x = x * (cell.size + 1);
    cell.y = y * (cell.size + 1);
    img = draw_square(img, cell, color);
    return (img);
}

function	fill_img(img)
{
    var	x;
    var	y;
    var	grey;

    grey = cl(64, 64, 128, 255);
    y = 0;
    while (y < (img.height - 6))
    {
	x = 0;
	while (x < img.width)
	    {
		piximage(img, x, y, grey);
		x++;
	    }
	y++;
    }
    return (img);
}

function	display_map(game, map)
{
    var	y;
    var	x;

    x = 0;
    y = 0;
    game.img = fill_img(game.img);
    while (typeof map[y] != "undefined")
    {
	while (typeof map[y][x] != "undefined")
	{
	    if (map[y][x] === 1)
		game.img = draw_cell(game.img,game.cell_size, x, y, game.on);
	    else if (map[y][x] === 0)
		game.img = draw_cell(game.img,game.cell_size, x, y, game.off);
	    else if (map[y][x] === 4)
		game.img = draw_cell(game.img,game.cell_size, x, y, game.dead);
	    x++;
	}
	x = 0;
	y++;
    }
    return (game.img);
}
