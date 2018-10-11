function add()
{
    var total = 0;
    var regex = new RegExp(",|\n");
    for(var i = 0; i < arguments.length; i++)
    {
        if(arguments[i] == "")
        {
            total += 0;
        }
        else if(arguments[i].includes(",") || arguments[i].includes("\n"))
        {
            var numberArray = arguments[i].split(regex);
            total += sum(numberArray);
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