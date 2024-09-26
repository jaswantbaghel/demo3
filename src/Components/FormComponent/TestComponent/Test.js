import { useState } from 'react';
import './Test.css';
function Test(props){
    
    var quiz = [{ question: "What is the capital of France?", correctAnswer: "paris",options:["London","NewYork","Delhi","Paris"],key:0 },
        { question: "Is JavaScript a programming language? (yes/no)", correctAnswer: "yes" ,options:["Yes","No","Can be both","None of above"],key:0 },
        { question: "What is 5 + 3?", correctAnswer: "8" ,options:["8","10","12","2"],key:0 },
        { question: "Is Earth the third planet from the Sun? (yes/no)", correctAnswer: "yes", options:["Yes","No","Can be both","None of above"],key:0 },
        { question: "What color is the sky on a clear day?", correctAnswer: "blue", options:["Red","Black","Blue","Yellow"],key:0},
        { question: "Is 10 greater than 15? (yes/no)", correctAnswer: "no" , options:["Yes","No","Can be both","None of above"],key:0 },
        { question: "What is the opposite of 'up'?", correctAnswer: "down" , options:["Right","Left","Down","Up"],key:0},
        { question: "Is water a solid at room temperature? (yes/no)", correctAnswer: "no" , options:["Yes","No","Can be both","None of above"],key:0 },
        { question: "Which planet is known as the Red Planet?", correctAnswer: "Mars" , options:["Earth","Mars","Jupiter","Saturn"],key:0},
        { question: "How many legs does a spider have?", correctAnswer: "8" , options:["4","6","12","8"],key:0}
        ];
        
        var [selectedoption,setSelectedoption] = useState([]);
        
        var marks = 0;
        var a =new Array(10); 
        for(let i=0;i<10;i++){
          a[i]=0;
        }
        function HandleOption(index,answer){
          //var a =new Array(10);
          if(answer.toLowerCase() ==quiz[index].correctAnswer.toLowerCase()){
            a[index]=1;
            console.log(a[index]);
          }else if(answer.toLowerCase() !=quiz[index].correctAnswer.toLowerCase()){
            a[index]=0;
            console.log(a[index]);
          }
         }

        function HandleSubmit(){
          for(let i=0;i<10;i++){
            marks = marks+a[i];
          }
          alert("Your Marks : "+marks);
        }

    return(<>
    <div id='testSection'>
      <div id='detail'>
        <h4>Name : {props.name}</h4>
        <h4>Age : {props.age}</h4>
        <h4>Address : {props.address}</h4>
      </div>
      <div id='section2'>
      {quiz.map((v,i)=>(
        <div id='queCard'>
            {i+1}. <span id='que' style={{"fontSize":"20"}}>{v.question}</span><br/>
            <input className='option' type='radio' value={v.options[0]} onChange={()=>HandleOption(i,v.options[0])} name={i}/>{v.options[0]}<br/>
            <input className='option' type='radio' value={v.options[1]} onChange={()=>HandleOption(i,v.options[1])} name={i}/>{v.options[1]}<br/>
            <input className='option' type='radio' value={v.options[2]} onChange={()=>HandleOption(i,v.options[2])} name={i}/>{v.options[2]}<br/>
            <input className='option' type='radio' value={v.options[3]} onChange={()=>HandleOption(i,v.options[3])} name={i}/>{v.options[3]}<br/><br/>
        </div>
        ))}  
        <button id='submitbtn' onClick={HandleSubmit}>Submit</button>
      </div>
      </div>
    </>)
}
export default Test;