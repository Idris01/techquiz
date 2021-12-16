import {
  choice,
  spinner,
  url, 
  questionBox,
  welcomeForm
} from './modules/utility.js'

document.addEventListener("DOMContentLoaded", ()=>{
  let questionData=[];
  let answers=[];
  let display=document.getElementById("questions");
  let panel=document.getElementById("panel");
  panel.addEventListener("click", (e)=>{
    let target=e.target;
    if(target.id!=="submit") return;
    let difficulty=document.getElementById("difficulty");
    if(difficulty.value==="0"){
      setIndicator("select level", 0);
    }
    else{
      questionController.hidePanel();
    }
  })
  const setIndicator=(msg,flag)=>{
    let indicator=document.getElementById("notify");
    if(flag===0){
      indicator.innerHTML=`
      <span class="text-dark rounded shadow p-1" style="font-size:1rem;">
      <i class="bi bi-exclamation-triangle-fill text-warning "></i>
      ${msg}</span>`
    }
    else{
      indicator.innerHTML=`
      <span class="text-success" style="font-size:1.5rem;" >${msg}</span>`
    }
    setTimeout(function() {
      indicator.innerHTML="";
    }, 2000);
  }
  
  display.addEventListener("click",(e)=>{
    let target=e.target;
    let ans=target.dataset.correct;
    let questionId =parseInt(target.dataset.id);
    
    if(ans==='true'){
      answers[questionId-1]=1;
      //console.log(questionId)
      //console.log(answers);
    }
    else if(ans==='false'){
      answers[questionId-1]=0;
      //console.log(questionId)
      //console.log(answers);
    }
  });
  const questionElement= (data, id)=>{
    let answers=data.answers;
    let correct=Object.values(data.correct_answers);
    //console.log(correct);
    let keys=Object.keys(answers);
    keys=keys.filter(f=>f!="null")
    let real_answers=keys.map((qu, i)=>choice(answers[qu], i===correct.indexOf("true"), id) ).join('')
    return questionBox(data, real_answers, id);
  }
  const questionController=(()=>{
    const setQuestions=(data)=>{
      answers=Array.from(Array(data.length)).map(it=>0);
    questionData=data.map((item, id)=>questionElement(item, id+1));
    return questionData.join('');
  }
    function loadQuestion(spin,bucket){
      bucket.innerHTML=spin;
      fetch(url(10,"Linux","easy"))
     .then(data=>data.json())
     .then(response =>{
      //if (!response.ok) throw false 
       bucket.innerHTML=setQuestions(response);
     })
    .catch(e=>{
      bucket.innerHTML=`<h2 class="text-danger">An error occurred ${e.message}</h2>`
    });
  }
   const showPanel =()=>{
     panel.innerHTML=welcomeForm;
   }
   const hidePanel= ()=>{
     panel.innerHTML=""
     panel.style.visibility="hidden";
   }
    return {
      loadQuestion, 
      showPanel, 
      hidePanel
      
    };
  })();
  
 // questionController.loadQuestion(spinner(),display);
 questionController.showPanel()
});