function	main()
{
    mlj_init();
    if (!(mlj_upload_button(buf_valid)))
	return (0);
    return (0);
}

function	buf_valid(buffer)
{
    if (!buffer)
	{
	    console.log("upload failed");
	    return (0);
	}
    console.log("file uploaded");
    if (!(get_buffer(buffer)))
	return (0);
    return (1);
}

function	get_buffer(buffer, win)
{
    var	x;
    var	y;
    var	map;

    map = [[]];
    if (!(x = x_map_calc(buffer)))
        return (0);
    if (!(y = wrong_char_and_y_calc(buffer)))
        return (0);
    if (!(map_checker(buffer, x, y)))
        {
            console.log("something went wrong with the map, oh noes ! :(");
            return (0);
        }
    console.log("so, i'm working with a map buffer of :", x,"X by", y, "Y");
    if (!(map = buffer_parser(buffer, x, y)))
        return (0);
    echo_parser_success(map, y);
    if (!(wolf(map, x, y)))
	return (0);
    return (1);
}

function	draw_img(cast, img)
{
    var	x;
    var	wall;
    var	sky;

    x = 0;
    while (x < img.width)
    {
	if (cast[x] == -1)
            return (img);
        wall = cast[x];
        sky = ((img.height - wall) / 2) | 0;
        put_wall_to_img(img, x, wall, sky);
        x++;
    }
    return (img);
}
