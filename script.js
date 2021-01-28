let count = 1;
function createCard(classId)
{
    var cardTitle = prompt("Please enter card title");
    if (cardTitle != null) {  
        let divTextTag = document.createElement('div');
        divTextTag.className = "textDiv";
        divTextTag.innerHTML = cardTitle;
        divTextTag.id = "card" + count;
            
        let editButton = document.createElement('button');
        editButton.classId = count;
        editButton.className = "btn";
        let iTag = document.createElement('i');
        iTag.className = "fa fa-edit";
        editButton.appendChild(iTag);
        editButton.setAttribute('onclick', 'editCard(this)');

        let deleteButton = document.createElement('button');
        deleteButton.classId = count;
        deleteButton.className = "btn";
        let iDeleteTag = document.createElement('i');
        iDeleteTag.className = "fa fa-close";
        deleteButton.appendChild(iDeleteTag);
        deleteButton.setAttribute('onclick', 'deleteCard(this)');

        
        let likeButton = document.createElement('button');
        likeButton.className = count;
        let iLikeTag = document.createElement('i');
        likeButton.id = "0";
        likeButton.innerHTML = "0";
        iLikeTag.className = "fa fa-thumbs-up";
        likeButton.appendChild(iLikeTag);
        likeButton.setAttribute('onclick', 'likeCard(this)');

        let divButtonTag = document.createElement('div');
        divButtonTag.className = "buttonDiv";
        divButtonTag.appendChild(editButton);
        divButtonTag.appendChild(deleteButton);
        divButtonTag.appendChild(likeButton);

        let divCardTag = document.createElement('div');
        divCardTag.id = "parentcard" + count;
        divCardTag.className = "card";
        divCardTag.appendChild(divTextTag);
        divCardTag.appendChild(divButtonTag);

        document.getElementById(classId).appendChild(divCardTag);
        count++;
    }
} 

function likeCard(selectedCard)
{
        let div = document.getElementsByClassName(selectedCard.className);
        let x = parseInt(div[0].id, 10) + 1;
        div[0].innerHTML = x;
        div[0].id = x;
        let iLikeTag = document.createElement('i');
        iLikeTag.className = "fa fa-thumbs-up";
        div[0].appendChild(iLikeTag);
}

function editCard(selectedCard)
{
    var cardTitle = prompt("Please enter card title");
    if (cardTitle != null) {  
        let div = document.getElementById("card" + selectedCard.classId);
        div.innerHTML = cardTitle;
    }
}

function deleteCard(selectedCard)
{
    let div = document.getElementById("parentcard" + selectedCard.classId);
    div.parentNode.removeChild(div);
}