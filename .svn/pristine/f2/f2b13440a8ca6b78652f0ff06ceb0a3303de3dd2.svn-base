function	gere_mouse(mousecode, x, y, game)
{
    var	mapx;
    var	mapy;

    mapx = ((x / (game.cell_size + 1)) | 0) - 3;
    mapy = ((y / (game.cell_size + 1)) | 0) - 3;
    console.log("toggling", mapx, mapy);
    if (game.map[mapy][mapx] == 1)
	game.map[mapy][mapx] = 4;
    else
	game.map[mapy][mapx] = 1;
    return (1);
}

function	gere_key(keycode, game)
{
    console.log(keycode);
    if (keycode === 17)
	((game.paused == 1) ? game.paused = 0 : game.paused = 1);
    if (keycode == 33)
	game.cell_size++;
    if (keycode == 34)
	game.cell_size--;
    if (keycode == 16)
	game.next_frame = 1;
    console.log(game.paused);

    return (0);
}
