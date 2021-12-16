const choice = (data, correct, questionId )=>{
    if(data===null) return '';
    return `<div class="form-check" style="font-size:70%;"> <input class="form-check-input" type="radio" name="flexRadioDefault" id=${data} data-correct=${correct} data-id=${questionId}> <label class="form-check-label" for=${data}> ${data}</label> 
    </div>`
  }
const spinner=()=>{
    return `<div class="d-flex justify-content-center text-primary"> <div class="spinner-border" role="status"> <span class="visually-hidden">Loading...</span> </div> </div>`;
  }
const url=(limit,category,difficulty) =>{
    return `https://quizapi.io/api/v1/questions?apiKey=NQuQvl6EzuMDMRyMHFD6lruY5y5uT2hqJW1DmF9H&limit=${limit}&category=${category}&difficulty=${difficulty}`
  }
const questionBox=(data, real_answers, id)=> {
  return`<div class="card my-1 sticky-top" style="min-height:max(30vh, 20vw);">
    <div class="card-header" style="font-size:80%; font-weight:bold;">
     ${id}: ${data.question}
    </div>
    <div class="card-body">
    <form>
    ${real_answers}
    </form>
    </div>
    </div>`
}
const welcomeForm=`

  <div class="row w-100 d-flex flex-column col-sm-6 justify-content-center align-items-center text-center bg-secondary py-3 px-3 rounded">
  
  <h1 class="lead text-white">
  Welcome to TechQuiz
  </h1>
  <div class="text-info text-center my-3 " style="height:50px;" id="notify" >
 <!-- form starts here -->
  </div>
  <form class="col-sm-12 col-md-8 vh-40">
<div class="input-group mb-3"> <label class="input-group-text" for="inputGroupSelect01">Difficulty</label> <select class="form-select" id="difficulty"> <option value="0" selected>....</option> <option value="1">Easy</option> <option value="2">Medium</option> <option value="3">Hard</option> </select> </div>
</form>

  <button class="btn btn-primary w-50" id="submit" > Start Quiz</button>
  </div>
  `
export {
  spinner,
  choice,
  url,
  questionBox,
  welcomeForm
} ;