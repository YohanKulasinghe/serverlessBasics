const Responses = require('./API_Responses');

exports.handler = async event => {
    console.log('event', event)

    if(!event.pathParameters || !event.pathParameters.ID){
        //Fails without an ID
        return Responses._400({message: 'missing the id from the path'})
    }

    let ID = event.pathParameters.ID;

    if(data[ID]){
        // return data
        return Responses._200(data[ID])
    }

    // faild as ID not in data
    return Responses._400({message: 'NO Id in data'})
}


const data = {
    1234: {name:'Nimal', age: 25 , job:'SE'},
    7893: {name:'Kamal', age: 26 , job:'QA'},
    5132: {name:'Sunil', age: 27 , job:'BA'},
};