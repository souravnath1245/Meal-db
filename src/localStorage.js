const getDb =( )=>{
    let saveDb = localStorage.getItem('shopping_cart')
   return (saveDb) ? saveDb = JSON.parse(saveDb) : {};
 //    if(saveDb){
 //        saveDb =JSON.parse(saveDb)
 //    }else{
 //        saveDb={};
 //    }
 //    return saveDb;
     
 }
const addToDb =(item)=>{
    const db = getDb();
    (db[item]) ? db[item] = db[item] + 1 : db[item] = 1;
    saveToDb(db)
    // if(item in db){
    //     db[item] = db[item] + 1;
    // }
    // else{
    //     db[item] = 1
    // }
}
const removeDb = item => {
    const db = getDb()
    delete db[item];
    saveToDb(db)
}
const saveToDb= (db)=>{
    localStorage.setItem('shopping_cart', JSON.stringify(db))
}



export {getDb, addToDb, removeDb}