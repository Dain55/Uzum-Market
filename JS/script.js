let box = document.querySelector('.box-element')
let div = document.createElement('div')
let div_text = document.createElement('div')
let div_sum = document.createElement('div')
let img = document.createElement('img')
let span = document.createElement('p')
let span2 = document.createElement('p')
let span3 = document.createElement('p')
let span4 = document.createElement('p')


img.src = 'https://images.uzum.uz/cfrlpa7g49devoa8vrsg/t_product_540_high.jpg#1677493757648'


div.classList.add('div-element')
div_text.classList.add('div_text')
div_sum.classList.add('box-sum-element')
img.classList.add('img-element')
span2.classList.add('box-text-element')
span3.classList.add('text-sum')
span4.classList.add('text-sum-black')

span.innerHTML = 'Подсолнечные масло Щедрое лето, рафинированное, 900 мл'
span2.innerHTML = '2 080 сум/мес'
span3.innerHTML ='23 000'
span4.innerHTML = '16 000 сум'

box.append(div)
div.append(img,div_text)
div_text.append(span,span2,div_sum)
div_sum.append(span3,span4)


