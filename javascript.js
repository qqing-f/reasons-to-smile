
const jokes= ['Things arent always #000000 and #FFFFFF.', 'You had me at Hello World','2b||!2b', 'I would love to change the world but they wont give me the source code.','I farted in the Apple store and everyone got mad at me. Not my fault they dont have Windows.', 'if(good website==1) <br> give full marks;', 'Why did the programmer go broke?<br> Because he used up all his cache.', 'There are 10 types of people in this world. Those who understand binary and those who don’t. <br> (10 = 2. took me a minute)',"I told my wife she was drawing her eyebrows too high. She looked surprised.",  "Why don’t skeletons fight each other? They don’t have the guts.", "Why did the scarecrow win an award? Because he was outstanding in his field!", "Why don’t some couples go to the gym? Because some relationships don’t work out.", "I told my wife she should embrace her mistakes. She gave me a hug.", "Why did the bicycle fall over? It was two-tired.", ];


function newJoke(){
    var randNumber = Math.floor(Math.random() * jokes.length);
   document.getElementById('jokeDisplay').innerHTML=jokes[randNumber];
}

