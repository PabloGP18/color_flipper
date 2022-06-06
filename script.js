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
    const newPnode = document.createTextNode("Background color:");
    newPnode.id="color"
    newP.appendChild(newPnode);
    content.append(newP);

    //creating div where button will be in, giving div an id and appending it to the main div container
    const divBtn = document.createElement("div");
    divBtn.id = "btn";
    divContainer.append(divBtn);

    // creating element for divBtn, adding text node to button tag, appending button in div divBtn
    const newButton = document.createElement("button");
    const newButtonnode = document.createTextNode("Click here");
    newButton.appendChild(newButtonnode);
    divBtn.append(newButton);

    // *** styling elements and page *** \\\

   /// ***styling body*** \\\
   // margin and vh body
   document.body.style.margin="0 auto"
   document.body.style.height="100vh"
   //changing font family for all the elements in body
   document.body.style.fontFamily="sans-serif"
   // changing background
   document.body.style.backgroundColor = "lightgrey"

   /// ***styling container*** \\\
   //making border div
   divContainer.style.border="5px solid black"
   divContainer.style.borderRadius="25%"
   divContainer.style.borderBlock="none"
   //giving height and width container
   divContainer.style.height = "500px"
   divContainer.style.width = "500px"
   // flexbox ond parent div
   divContainer.style.display="flex"
   divContainer.style.alignItems="center"
   divContainer.style.justifyContent="center"
   divContainer.style.flexDirection= "column"
   // putting div in the middle of page
   divContainer.style.margin="120px auto"

   //styling title
   newH1.style.fontSize="50px"

   //styling p tag
   newP.style.fontSize="20px"

   //styling button
   newButton.style.height="50px"
   newButton.style.borderRadius="20%"
   newButton.style.fontStyle="italic"
   newButton.style.cursor="pointer"
   newButton.style.background="transparent"

   // *** making function and event listener to generate random color *** \\\

   function generateRandomColor() {
       const letters = '0123456789ABCDEF';
       let color = '#';
       for (let i = 0; i < 6; i++) {
           color += letters[Math.floor(Math.random() * 16)];
           document.body.style.background= color;
           newP.innerText=`Background color: Hex rgb ${color}`;
       }
   }

   // *** making eventlistener for button, every time you click color will change and the hex rgb code will display *** \\\
        newButton.addEventListener('click',function (){
        generateRandomColor()
       //setInterval(generateRandomColor,100)
   })





