var		g_first_map = 0;

function	game_settings(map)
{
    var	game =
	{
	    win:	0,
	    img:	0,
	    x_size:	900,
	    y_size:	600,
	    cell_size:	10,
	    on:		0,
	    off:	0,
	    dead:	0,
	    map:	map,
	    paused:	1,
	    next_frame:	0,
	};
    game.on = [];
    game.off = [];
    game.dead = [];
    game.on = cl(0, 200, 200, 255);
    game.off = cl(32, 0, 48, 255);
    game.dead = cl(90, 0, 90, 255);
    return (game);
}

function	game_of_life_loop(game)
{
    if (!game.paused || game.paused && game.next_frame)
	game.map = calc_next_frame(game.map);
    game.next_frame = 0;
    display_map(game, game.map);
    mlj_put_image_to_window(game.win, game.img, 0, 0);

    return (0);
}

function	game_of_life(map, map_x, map_y)
{
    var		game;

    game = game_settings(map);
    game.win = mlj_new_window(game.x_size, game.y_size, "black", "blah");
    game.img = mlj_new_image(game.win, game.x_size, game.y_size);
    game.img = display_map(game, game.map);
    mlj_put_image_to_window(game.win, game.img, 0, 0);
    mlj_key_hook(gere_key, game);
    mlj_loop_hook(game_of_life_loop, game);
    mlj_mouse_hook(gere_mouse, game);
    mlj_loop ();
    return (0);
}

function        main()
{
    mlj_init("Faster Than Life !");
    if (!(mlj_upload_button(buf_valid)))
        return (0);
    return (0);
}
