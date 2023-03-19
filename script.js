function btn() {
    var btn = document.getElementById("text");
       if (btn.style.display === "none") {
      btn.style.display == "block";
       } else {
         btn.style.display = "none";
          }
        }
       
        const divs = document.createElement("div");
        document.body.appendChild(divs);
       
      divs.setAttribute("id", "card");
       
      const h_2 = document.createElement("h2");
        const parent = document.getElementById("card");
       
       parent.appendChild(h_2);
       
        const cre_a = document.createElement("a");
        divs.appendChild(cre_a);
       
      cre_a.setAttribute("href", "#");
       
   const text = document.createTextNode("Mariami");
       
   h_2.appendChild(text);
       
   const text_1 = document.createTextNode("Go to Profile");
       
   cre_a.appendChild(text_1);
       
     const color = document.querySelector("div");
       
     color.style.backgroundColor = "red";