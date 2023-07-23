import React, { useState } from 'react'

export default function Textforms(props) {

    const [text, setText]= useState("Enter text here");

    const upperCase = () =>{
         const newText = text.toUpperCase();
         setText(newText);

    }

    const lowerCase = () =>{
        const newText = text.toLowerCase();
        setText(newText);

   }

//    const Captalizecase =()=>{
//     const newText []= ;
//     setText(newText);

//    }
   const SentenceCase =()=>{
    let sentences = text.split('.');
    var count = 0;
    if (count === 0){
        var SenCase = sentences.map(function(word){
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
    
        var sentenceCaseText = SenCase.join(".") + ".";
    
        setText(sentenceCaseText);
       
        count++;
        console.log(count)

    }

   
    else if(count > 0){
        for(let i = 0; i< count ; i++){
            let newSent = text.trim().split(/[ ]+/);
            newSent.pop();
            let txt = newSent.join(" ");
            
            setText(txt);
            
    
    }
    }
}




    const handleSpace =()=>{
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
    } 

    const copyText =()=>{
        var text = document.getElementById("textBox");
        text.select();
        navigator.clipboard.writeText(text.value);
    }



    const handleOnChange =(event)=>{
        setText(event.target.value)
    }
    
    const wordCount =()=> {
        if(text.length === 0){
            let word = 0;
            return word;
        }
        else{
            let word = text.split(/\s+/).length;
            return word;
        }
       

    }



   return(
    <><div className="container my-3">

          <h1>{props.heading}</h1>

          <textarea className="form-control" value={text} onChange={handleOnChange} id="textBox" rows="8"></textarea>

      </div>
      <div>

              <button className='btn btn-primary' onClick={upperCase}>Convert to UpperCase</button>

        
              <button className='btn btn-primary mx-3 my-3' onClick={lowerCase}>Convert to LowerCase</button>
              <button className='btn btn-primary mx-3 my -3' onClick={SentenceCase}>Convert to Sentence Case</button>
              {/* <button className='btn btn-primary mx-3' onClick={Captalizecase}>Convert to CaptalizeCase</button> */}
              <button className='btn btn-primary mx-3 my-3' onClick={handleSpace}>Remove extra spaces</button>
              <button className='btn btn-primary mx-3' onClick={copyText}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-clipboard" viewBox="0 0 16 16">
                    <path d="M4 1.5H3a2 2 0 0 0-2 2V14a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V3.5a2 2 0 0 0-2-2h-1v1h1a1 1 0 0 1 1 1V14a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V3.5a1 1 0 0 1 1-1h1v-1z"/>
                    <path d="M9.5 1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5h-3a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h3zm-3-1A1.5 1.5 0 0 0 5 1.5v1A1.5 1.5 0 0 0 6.5 4h3A1.5 1.5 0 0 0 11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3z"/>
                    </svg>
              </button>

             
            
            


          </div>
       <div className='container my-3'> 
        <h3>Your text summary</h3>
        <p>{wordCount()} words and {text.trim().length} characters</p>
        </div>   
          
          </>
          

  );
}
