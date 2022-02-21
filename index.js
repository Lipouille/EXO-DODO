let list_des_email = []

function prout_le_retour(text) {
    console.log(text)
    for (const email of list_des_email) {
        if (email == text) {
            return true
        }
    }
    return window.alert("Veuillez créer un compte");
}

function prout() {
    let input_mail = document.getElementById("mail");
    console.log(prout_le_retour(input_mail.value))
}


function submit(e) {
    console.log("toto", e)
}

let i = 0
function main() {

    // let colorTransition = document.querySelector(".test");
    // window.setInterval(function () {
    //     colorTransition.classList.toggle("noir")
    // }, 1000);

    let bt = document.getElementById("bouton_v");
    console.log(bt);
    bt.onclick = prout;

    // let boutonOnClick = document.getElementById("boutonAddDiv");
    // console.log(boutonOnClick)
    // boutonOnClick.onclick = function addElement() {
    //     let newDiv1 = document.createElement("div");
    //     let textDiv = document.createTextNode("Je viens d'insérer une Div");
    //     newDiv1.appendChild(textDiv);
    //     document.body.insertBefore(newDiv1, boutonOnClick);
    // }

    let boutonOnClick = document.querySelector("#boutonAddDiv");
    boutonOnClick.onclick = function addElement() {
        let template = document.querySelector("#abc");
        let insert = document.querySelector("#divWrapper");
        let clone = document.importNode(template.content, true);
        clone.querySelector("#aremp").id = i
        // clone.id = i;
        i++;
        let e = insert.appendChild(clone);
        console.log(e);

        // let newDiv = document.createElement("div");
        // newDiv.classList.add("pourCss");
        // let textDiv = document.createTextNode("Je viens d'insérer une Div");
        // newDiv.appendChild(textDiv);
        // let divWrapper = document.querySelector("#divWrapper");
        // document.querySelector("#divWrapper").appendChild(newDiv);
    }
}

function sup (a) {
    let idParent = a.parentNode;
    idParent.remove();
}


function toggle(a) {
    let toggleMaDiv = a.parentNode
    toggleMaDiv.classList.toggle("toggle");
    // for (el of toggleMaDiv.children ) {
    //     el.classList.toggle("toggle")
    // }
}