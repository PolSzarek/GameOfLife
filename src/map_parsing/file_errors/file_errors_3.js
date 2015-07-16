function	n_end(buffer)
{
    var	i;

    i = 0;
    while (buffer[i])
	i++;
    if (buffer[i - 1] != '\n')
    {
	console.log("the map doesn't end with a '\\n', please fix this");
	return (0);
    }
    return (1);
}
