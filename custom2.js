function abrirdesc(id){
    const desc_switch= document.getElementById(id)
    if(desc_switch.style.display === 'none'){
        desc_switch.style.display = 'flex';
    }
    else{
        desc_switch.style.display = 'none';     
    }
}

function filtrarRank(rank){
    document.getElementById('rank1').style.display='none';
    document.getElementById('rank2').style.display='none';
    document.getElementById('rank3').style.display='none';
    document.getElementById('rank4').style.display='none';
    document.getElementById('rank5').style.display='none';
    document.getElementById('lista_criaturas').style.display='none';
    document.getElementById(rank).style.display='block';
}