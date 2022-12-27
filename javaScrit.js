

var buttTrash= document.getElementsByClassName('buttDel')
for (var i =0; i<buttTrash.length;i++) {
    var button =buttTrash[i]
    button.addEventListener('click', function(event){
        var buttonClicked=event.target
        buttonClicked.parentElement.parentElement.parentElement.remove()
    })
}
//button Like
const buttColor = document.getElementsById("heart_color")
buttColor.addEventListener("click", color)
function color(){
    document.getElementsById(id="col").style.color="red"
}

let butPlus=document.getElementsByClassName('buttQtp')
for (let i =0; i<butPlus.length;i++){
     let btn=butPlus[i]
     btn.addEventLisner('click',function(event) {
    
        let btnPlusPess=event.target       
        let btnPlusPessParent=btnPlusPess.parentElement
        let qteElement=btnPlusPessParent.getElementsByClassName('submitSpan').childNodes[0].nodeValue
        qteElement.value=parseInt(qteElement.value)+1

        let h3=event.target.parentElement.parentElement.getElementsByClassName('total').getElementsByClassName('pixTotal')
        let sum =document.getElementsById('somme')
        sum.value=parseFloat(sum.value)+parseFloat(h3.textContent)
    })

}



