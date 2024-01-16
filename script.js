function reverseNumber(num)
{
	num = num + "";
	return num.split("").reverse().join("");
}