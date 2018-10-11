function add()
{
    var totalArray = [];
    for(var i = 0; i < arguments.length; i++)
    {
        var regex = new RegExp(",|\n");
        if(arguments[i] == "")
        {
            continue;
        }
        else if(arguments[i].includes(",") || arguments[i].includes("\n"))
        {
            if(arguments[i].includes("//"))
            {
                var numberArray2 = arguments[i].split("\n");
                regex = numberArray2[0].substr(2) + "|,|\n";
                arguments[i] = arguments[i].substr(regex.length - 1); //cut of the optional part off the argument
                regex = new RegExp(numberArray2[0].substr(2) + "|,|\n") //make new regex have as delimiter
            }
            var numberArray = arguments[i].split(regex);
            totalArray = AddArrayToArray(totalArray, numberArray);
        }
        else
        {
            totalArray.push(parseInt(arguments[i]));
        }
    }
    var sum = 0;
    var illegalNumbers = "";
    for(var i = 0; i < totalArray.length; i++)
    {
        if(parseInt(totalArray[i]) < 0)
        {
            illegalNumbers += totalArray[i] + ",";
        }
        else if(parseInt(totalArray[i]) > 1000)
        {
            continue;
        }
        else
        {
            sum += parseInt(totalArray[i]);
        }
    }
    if(illegalNumbers != "")
    {
        illegalNumbers = "Negatives not allowed: " +  illegalNumbers.substr(0,illegalNumbers.length - 1);
        throw new Error(illegalNumbers);
    }
    return sum;

}

function AddArrayToArray(numberArray, numberArray2)
{
    for(var i = 0; i < numberArray2.length; i++)
    {
        numberArray.push(parseInt(numberArray2[i]));
    }
    return numberArray;
}

module.exports = add;