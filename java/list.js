
let members = [
    {
        name: "Diego Ferrer Rojas",
        donation: "1000",
        comment: ""
    },
    {
        name: "Miguel Álvarez",
        donation: "10",
        comment: "What is this?"
    },
    {
        name: "Adrián Calva Soto",
        donation: "250",
        comment: ""
    },
    {
        name: "Aday Sosa",
        donation: "500",
        comment: "Hiii :)"
    },
];

function initialize(){

    const MEMBER_FORM = document.getElementById("member_form");
    MEMBER_FORM.addEventListener("submit",addMember);

    showMembers();
}

function addMember(event){
    event.preventDefault();

    const NAME = event.target.name.value;
    const DONATION = event.target.donation.value;
    const COMMENT = event.target.comment.value;

    if(NAME == ""){

        let NAME_ERROR = document.getElementById("name-error");
        NAME_ERROR.style.visibility="visible";
        error1 = true;

    } else{

        error1 = false;

    }

    if(DONATION < 10 || DONATION == 0){

        let DONATION_ERROR = document.getElementById("donation-error");
        DONATION_ERROR.style.visibility="visible";
        error2 = true;

    } else{

        error2 = false;

    }
    
    if (error1 == false && error2 == false){

        members.push({
            name: NAME,
            donation: DONATION,
            comment: COMMENT
        })

        let DONATION_ERROR = document.getElementById("donation-error");
        let NAME_ERROR = document.getElementById("name-error");
        NAME_ERROR.style.visibility="hidden";
        DONATION_ERROR.style.visibility="hidden";

    }

    showMembers();
}

function showMembers(){
    const MEMBER_LIST = document.getElementById("member-list");
    let allMembers = "";

    for(let i=0;i<members.length;i++){

        allMembers += `<li>${members[i].name} ( ${members[i].donation}$ ) [ ${members[i].comment} ] <button onclick="deleteMember(${i})">IGNORE</button></li>`;

    }

    MEMBER_LIST.innerHTML = allMembers;
}

function deleteMember(memberId){

    members.splice(memberId, 1);

    showMembers();
}

initialize();