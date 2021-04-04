/*var tempreature = prompt("What's the tempreature today?");

            

var temp  = ''

if (tempreature > 20) {temp = " <p>it is a nice day</p>"}
else if (tempreature < 20) {  temp = " <p>it is a cold day</p>" } 
else {  sti = " <p>have a good DAY</p>" }

document.write(temp);




var working = prompt("how many day you work a weak?");
            

var day  = ''

if (working > 5) { day = " <p>you need to take a break</p>" }
else if (working < 5) {  day = " <p>it is a good job if it is lees than 5 days</p>" } 
else {  day = " <p>wish you luck</p>" }

document.write(day);




var family = prompt("how many kids you have?");
            

var kids  = ''

if (family > 5) { kids = " <p>i hope the all in a good health</p>" }
else if (family < 5) {  kids = " <p>it is good to have less than 5 kids i thank</p>" } 
else {  kids = " <p>i wish the all become do</p>" }

document.write(kids);











var team = "FC Barcelona is the best team in the world"
            


document.write(team);







*/


var username = prompt('please anter the user name'); while(username !== 'mahmoud') 
{
username = prompt('the user name is not correct');
}


var footbalClub = prompt('please choose a footbal club?');
while(footbalClub !=='barcelona' && footbalClub !=='madrid')
{
footbalClub = prompt('please choose betwen barcelona or madrid');
}

var userInput = prompt ('please enter number of champion cups');

for (var i = 0; i < userInput; i++)
{
   if(footbalClub == 'barcelona') {
       document.write('<img src="https://i.dailymail.co.uk/i/pix/2013/09/17/article-2423345-1BDFDBC9000005DC-498_634x407.jpg"/>');
   }
  else {
        document.write('<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQD_gx7_kmbAJaNMcKYNZqZq5aavWQ49bbFvg&usqp=CAU">')
   }
}



function printName()
{console.log('class 102');}



function printConsolenumber(parm1, parm2) 
{
for(var i = parm1; i< parm2; i++)

{
console.log(i);
}

}


printName()
printConsolenumber(1, 10);
printConsolenumber(50, 100);
printConsolenumber(200, 300);


















