const addBtn = document.getElementById("s-btn")   // submit button data
const clearBtn = document.getElementById("c-btn") //clear button data
const text = document.getElementById("field")     //input field data
const olEl = document.getElementById("ol-el")     //list data
const comEl = document.getElementById("com-el")
let data = [], comData = []                     //array where all data is saved

let locallead1 = JSON.parse(localStorage.getItem("todolist1"))
let locallead2 = JSON.parse(localStorage.getItem("todolist2"))
if(locallead1)
{
    data = locallead1
}
if(locallead2)
{
    comData = locallead2
}
render()


addBtn.addEventListener("click", function () //add input field text to list
{
    if (text.value != "")
    {
        data.push(text.value)
        localStorage.setItem("todolist1",JSON.stringify(data))
        text.value = ""
        render()
    }
})
clearBtn.addEventListener("dblclick", function () //delete list on double click
{
    localStorage.clear()
    data = []
    comData = []
    render()
})

function render() 
{
    let list1Items = "", list2Items = ""
    for (let i = 0; i < data.length; i++) 
    {
        list1Items += `
            <li class = "data"> 
                ${data[i]}  
                <div class="btn">
                    <button class="done" onclick = "mark(${i})">Done</button> 
                    <button class="delete" onclick = "del(${i})">X</button>
                </div>   
            </li>
            `
    }
    olEl.innerHTML = list1Items

    for (let i = 0; i < comData.length; i++) 
    {
        list2Items += `
            <li class = "newdata"> 
                ${comData[i]}
            </li>
            `
    }
    comEl.innerHTML = list2Items
}
function mark(indx)
{
    comData.push(data.splice(indx,1))
    localStorage.setItem("todolist1",JSON.stringify(data))
    localStorage.setItem("todolist2",JSON.stringify(comData))
    render()
}
function del(indx)
{
    data.splice(indx,1)
    localStorage.setItem("todolist1",JSON.stringify(data))
    render()
}