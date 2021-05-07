class Question{
    constructor(){
  this.title = createElement("h1")
  this.input1 = createInput("").attribute("placeholder","Enter Your Name")
  this.input2 = createInput("").attribute("placeholder","Enter correct option no.")  
  this.button = createButton("submit")
  this.question = createElement("h3")
  this.option1 = createElement("h4")
  this.option2 = createElement("h4")
  this.option3 = createElement("h4")   
    }   
 
hide(){

//this.title.hide()
//this.question.hide()
this.input1.hide()
this.input2.hide()
this.button.hide()

}

  display(){

  this.title.html("My Quiz Game")
  this.title.position(350,0)
  
  this.question.html("Q) X²+1 = 0")
  this.question.position(150,80)

  this.option1.html("A) 1 ")
  this.option1.position(150,100)
  
  this.option2.html("B) -1")
  this.option2.position(150,120)

  this.option3.html("C) iota")
  this.option3.position(150,140)

  this.input1.position(150,250)
  this.input2.position(350,250)

  this.button.position(200,320)

  this.button.mousePressed(()=>{

    this.input1.hide()
    this.button.hide()
    title.hide()
    contestant.name = this.input1.value()
    contestantCount = contestantCount+1   
    contestant.index = contestantCount
    contestant.update()
    contestant.updateCount(contestantCount)


})




  }
 }