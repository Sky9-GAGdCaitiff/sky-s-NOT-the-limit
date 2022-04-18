"use strict";
module.exports.greeting = async (event) => {
return { 
statusCode: 200, 
body: JSON.stringify( 
{
mesage: "Hurray! This is my first serverless project and I'm excited to be sharing it with you",
input: event, 
},
null, 
2
), 
}; 
};
