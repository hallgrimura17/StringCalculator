function add(numbers)
{
    if(numbers == "")
    {
        return 0;
    }
    else if(numbers.includes(","))
    {
        numberArray = numbers.split(",");
        var sum = 0;
        for(var i = 0; i < numberArray.length; i++)
        {
             sum += parseInt(numberArray[i]);
        }
        return sum;
    }
    else
    {
        return parseInt(numbers);
    }
}

module.exports = add;