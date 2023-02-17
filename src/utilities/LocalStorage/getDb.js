
function addToDb(data){
    const dbData = JSON.parse(localStorage.getItem('notePad') || '[]');
    dbData.push(data);
    localStorage.setItem( 'notePad', JSON.stringify(dbData));
}

function getDataFromDb(){

}




export {
    addToDb
}