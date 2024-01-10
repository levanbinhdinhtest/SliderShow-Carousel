let listImg = document.querySelectorAll('.list-image div img')
// console.log(listImg)
let btnNext = document.querySelector('.control-next')
let btnPrev = document.querySelector('.control-prev')
let imageShow = document.querySelector('.main-image img')
let itemImage = document.querySelectorAll('.list-image div')
// console.log(itemImage)


//lay ra vi tri cua anh
let currenIndex = 0
function borderChoose(currenIndex){
    itemImage.forEach(item=>{
        item.classList.remove('active')
    })

    itemImage[currenIndex].classList.add('active')
}

listImg.forEach(function(item,index){
    item.addEventListener('click',function(){
        currenIndex = index
        slideImageShow()
        borderChoose(currenIndex)
    })
})
function slideImageShow(){
    imageShow.src = listImg[currenIndex].src;
}

btnNext.addEventListener('click',function(){
    if(currenIndex<listImg.length-1){
        currenIndex++
        slideImageShow()
        // console.log(currenIndex)
    }
    else{
        currenIndex = 0
        slideImageShow()
    }
      
})
btnPrev.addEventListener('click',function(){
    if(currenIndex>0){
        currenIndex--
        slideImageShow()
        // console.log(currenIndex)
    }
    else{
        currenIndex = listImg.length-1
        slideImageShow()
    }
})