const createSeva = Seva => async(name,seva,phonenumber,address)=>{
    if (!name || !seva || !phonenumber || !address){
        return (`name : ${name}, seva :${seva}, phonenumber: ${phonenumber}, address :${address}`)
    }else{
        const sevaObj = new Seva({
            name, seva, phonenumber, address
        })
        return sevaObj.save()
    }
}

module.exports = Seva => {
    return {
        createSeva : createSeva(Seva)
    }
}