class Contestant{

    constructor(){
    
    this.index = null
    this.name = null
    this.answer = 0
    
    }
    
    getCount(){
    var contestantcountref = database.ref('ContestantCount')
    contestantcountref.on("value",function(data){
    contestantCount = data.val()
    
    })
    }
    
    updateCount(count){
    
     database.ref('/').update({
         ContestantCount : count
     })
    
    }
    
    update(){
    
    var contestantIndex = "contestants/contestant"+this.index
    database.ref(contestantIndex).set({
        name:this.name,
        answer:this.answer
    })
    }
    
    static getcontestantinfo(){
    
    var contestantinforef = database.ref("contestants")
    contestantinforef.on("value",(data)=>{
    
    allcontestants = data.val()
    
    })
    
    }}