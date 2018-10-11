function add(numbers)
{
    if(numbers == "")
    {
        return 0;
    }
    else if(numbers.includes(","))
    {
        numberArray = numbers.split(",");
        return parseInt(numberArray[0]) + parseInt(numberArray[1]);
    }
    else
    {
        return parseInt(numbers);
    }
}

module.exports = add;