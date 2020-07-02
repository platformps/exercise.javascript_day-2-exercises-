let user= prompt("Enter a number greater than 0 and less than 100: ")


while(user>=100 || user<=0)
{
    user=prompt("Re-enter a number greater than 0 and less than 100: ")
}
user=user*user
document.write("\n"+user)
