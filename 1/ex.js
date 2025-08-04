
const tabList = document.querySelectorAll('#s02 .nav-list li');
const content = document.querySelectorAll('#s02 .content_list li');

let i = 0;

init(i)
//함수호출
function init(q) {
    tabList[q].classList.add('on')
    content[q].classList.add('active')
}//함수정의

function reset() {
    for (let i = 0; i < tabList.length; i++) {
        tabList[i].classList.remove("on")
        content[i].classList.remove("active")
    }
}

tabList.forEach((tab, index) => {
    tab.addEventListener('click', (e) => {
        e.preventDefault()
        reset()
        console.log(index)
        init(index)
    })
})