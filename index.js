// Write your code here!
function NoLonger(){
    const body = document.querySelector("body");
    const secondChild = body.querySelector("main")
    body.removeChild(secondChild);

}
NoLonger()

const newHeader = document.createElement("h1")
document.body.appendChild(newHeader)

function changeId(){
    newHeader.id = "victory"


}
changeId()

function textInside(){
    const newHeader = document.getElementById("victory")
    newHeader.innerHTML = "Ivy is the champion"
}
textInside()