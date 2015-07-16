function	loop(wolf)
{
    var	cast;

    cast = [];
    cast = rayarray(wolf);
    cast = wall_height(wolf.img.height, cast);
    wolf.img = draw_img(cast, wolf.img);
    mlj_put_image_to_window(wolf.win, wolf.img, 0, 0);
    return (0);
}

function	wolf(map, xx, yy)
{
    var	win;
    var	img;
    var	wolf;

    win = mlj_new_window(640, 480, "black", "blah");
    img = mlj_new_image(win, 640, 480);
    wolf =
	{
            win:        win,
            img:        img,
            map:        map,
            map_x:      xx,
            map_y:      yy,
	    cam_x:      1.5,
            cam_y:      1.5,
            cam_a:      0
        };
    mlj_key_hook(gere_key, wolf);
    mlj_loop_hook(loop, wolf);
    mlj_loop ();
    return (0);
}
