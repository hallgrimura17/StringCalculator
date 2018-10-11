function add()
{
    var totalArray = [];
    var regex = new RegExp(",|\n");
    for(var i = 0; i < arguments.length; i++)
    {
        if(arguments[i] == "")
        {
            //do nothing
        }
        else if(arguments[i].includes(",") || arguments[i].includes("\n"))
        {
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