let words=document.querySelectorAll(".word");
words.forEach( (word)=>{
    let letters=word.textContent.split("");
    word.textContent="";
    letters.forEach( (letter) => {
        let span=document.createElement("span");
        span.textContent=letter;
        span.className="letter";
        word.append(span);
    });
});

let currentword=0;
let maxwords=words.length-1;
words[currentword].style.opacity="1";

let changetext= () => {
         let currenmethod= words[currentword];
         let nextword= currentword=== maxwords ? words[0] : words[currentword+1];
         Array.from(currenmethod.children).forEach((letter,i) =>{
            setTimeout(() => {
                letter.className="letter out";

            }, i*80);
         });

         nextword.style.opacity="1";

         Array.from(nextword.children).forEach((letter,i) => {
            letter.className="letter behind";
            setTimeout(() => {
                 letter.className="letter in";
            },340+i*80);

         });

        currentword= currentword===maxwords ? 0 : currentword+1;


};

changetext();
setInterval(changetext,3000);


// -------------------- skill task  ---------------//



// mix it the portfolio section

var mixer = mixitup('.portfoloi-galary');

// ==================active menu  ===============================================

let menuli=document.querySelectorAll('header  ul li a');
let section=document.querySelectorAll('section');
function activeMenu(){
      
    let len=section.length;
    while(--len && window.scrollY+97 <section[len].offsetTop){
        
    }


}