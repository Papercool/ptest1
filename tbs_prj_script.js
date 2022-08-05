
function updateWeight(slideAmount) {
    //get the element
    var display = document.getElementById("weight");
    //show the amount
    display.innerHTML=slideAmount;
}

function updateHeight(slideAmount) {
    //get the element
    var display = document.getElementById("height");
    //show the amount
    display.innerHTML=slideAmount;
}

function tbs_hide_show_tag(id) {
    const tbs_tag = document.getElementById(id);
    if (tbs_tag.style.display === "none") {
        tbs_tag.style.display = "block";
    } else {
        tbs_tag.style.display = "none";
    }
}

function tbs_hide_show_textarea(id,rad_id) {
    const tbs_textarea_id = document.getElementById(id);
    if(document.getElementById(rad_id).checked == true) {   
        tbs_textarea_id.style.display = "block";
    } else {
        tbs_textarea_id.style.display = "none";
    }
}
