function        get_buffer(buffer, win)
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
    if (!(game_of_life(map, x, y)))
	return (0);
    return (1);
}

function        buf_valid(buffer)
{
    if (g_first_map++)
	return (0);
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
