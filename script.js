   // *** creating elements of page *** \\\

    //creating div container, giving container an id and appending it to body
    const divContainer = document.createElement("div");
    divContainer.id="container";
    document.body.appendChild(divContainer);

    //creating div where title will be in, giving div an id and appending it to the main div container
    const divTitle = document.createElement("div");
    divTitle.id = "title";
    divContainer.append(divTitle);

    // creating element for title, give title some content, adding text node to h1 tag, appending title in div title
    const newH1 = document.createElement("h1");
    const newContent = document.createTextNode("Color Flipper");
    newH1.appendChild(newContent);
    divTitle.append(newH1);

    //creating div where content will be in, giving div an id and appending it to the main div container
    const content = document.createElement("div");
    content.id = "content";
    divContainer.append(content);

    // creating element for content, adding text node to p tag, appending p in div content
    const newP = document.createElement("p");
    const newPNode = document.createTextNode("Background color:");
    newPNode.id="color"
    newP.appendChild(newPNode);
    content.append(newP);

    //creating div where button will be in, giving div an id and appending it to the main div container
    const divBtn = document.createElement("div");
    divBtn.id = "btn";
    divContainer.append(divBtn);

    // creating element for divBtn, adding text node to button tag, appending button in div divBtn
    const newButton = document.createElement("button");
    const newButtonNode = document.createTextNode("Click here");
    newButton.appendChild(newButtonNode);
    divBtn.append(newButton);

    /* /creating audio element  and appending it to body
   const audio = document.createElement("audio");
   audio.preload = "auto";
   audio.src = "https://themushroomkingdom.net/sounds/wav/smb/smb_coin.wav";
   document.body.appendChild(audio);*/

    // *** styling elements and page *** \\\

   /// ***styling body*** \\\
   // margin and vh body
   document.body.style.margin="0 auto";
   document.body.style.height="100vh";
   //changing font family for all the elements in body
   document.body.style.fontFamily="sans-serif";
   // changing background
   document.body.style.backgroundColor = "lightgrey";

   /// ***styling container*** \\\
   //making border div
   divContainer.style.border="5px solid black";
   divContainer.style.borderRadius="25%";
   divContainer.style.borderBlock="none";
   //giving height and width container
   divContainer.style.height = "350px";
   divContainer.style.width = "350px";
   // flexbox ond parent div
   divContainer.style.display="flex";
   divContainer.style.alignItems="center";
   divContainer.style.justifyContent="center";
   divContainer.style.flexDirection= "column";
   // putting div in the middle of page
   divContainer.style.margin="120px auto";

   //styling title
   newH1.style.fontSize="50px";

   //styling p tag
   newP.style.fontSize="20px";

   //styling button
   newButton.style.height="50px";
   newButton.style.borderRadius="20%";
   newButton.style.fontStyle="italic";
   newButton.style.cursor="pointer";
   newButton.style.background="transparent";
   newButton.style.border="1px solid black";
   newButton.style.color="black";


   // *** making function and event listener to generate random color *** \\\

   function generateRandomColor() {
       const letters = '0123456789ABCDEF';
       let color = '#';
       /*let colorTitle = '#';
       let colorP = '#';
       let colorBorder = '#';*/
       for (let i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
           document.body.style.background= color;
           newP.innerText=`Background color: Hex rgb ${color}`;

           /*colorTitle+= letters[Math.floor(Math.random() * 16)];
           newH1.style.color=colorTitle;

           colorBorder+= letters[Math.floor(Math.random() * 16)];
           divContainer.style.border=`5px solid ${colorBorder}`;

           colorP+= letters[Math.floor(Math.random() * 16)];
           newP.style.color=colorP;*/
       }
   }
   // *** making hover effect with event listener and functions when you hover the button *** \\\
   newButton.addEventListener("mouseover", mouseOver);
   newButton.addEventListener("mouseout", mouseOut);

   function mouseOver() {
       newButton.style.background= "black";
       newButton.style.color = "white";
   }

   function mouseOut() {
       newButton.style.background= "transparent";
       newButton.style.color = "black";
   }
   // *** making event listener for button, every time you click color will change and the hex rgb code will display *** \\\
        newButton.addEventListener('click',function (){
            generateRandomColor();
            //audio.play();
            //setInterval(generateRandomColor,100)
        })



