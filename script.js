function button(){
    var number = document.getElementById('insertNumber')
    var randomNumber = Math.floor(Math.random()*6) + 1
    var img = document.getElementById('imgWainting')
    if(number.value.length == 0){
        document.getElementById('result').textContent = `Choose The Number `
    } else  if(randomNumber == number.value) {
        document.getElementById('result').textContent = `How did you know ? `
        img.src = 'surprise.png'
    } else{
        document.getElementById('result').textContent = `Come on try again`
        img.src ='happy.png'
    }

   /* if(number.value.length == 0){
        document.getElementById('result').textContent = `Choose The Number `
    }else{
        document.getElementById('result').textContent = `You Chose ${number.value}`
    }
*/
}

