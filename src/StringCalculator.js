function add()
{
    var total = 0;
    for(var i = 0; i < arguments.length; i++)
    {
        if(arguments[i] == "")
        {
            total += 0;
        }
        else if(arguments[i].includes(","))
        {
            numberArray = arguments[i].split(",");
            for(var j = 0; j < numberArray.length; j++)
            {
                if(numberArray[j].includes("\n"))
                {
                    var numberArray2 = numberArray[j].split("\n");
                    total += sum(numberArray2);
                }
                else
                {
                    total += parseInt(numberArray[j]);
                }
            }
        }
        else
        {
            total += parseInt(arguments[i]);
        }
    }
    return total;
}

function sum(numberArray)
{
    var sum = 0;
    for(var i = 0; i < numberArray.length; i++)
    {
         sum += parseInt(numberArray[i]);
    }
    return sum;
}

module.exports = add;