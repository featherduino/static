console.log("🏃 appStoreConnectAPIFromNode.js running 🏃‍")

const fs   = require('fs');
const jwt  = require('jsonwebtoken'); // npm i jsonwebtoken
// You get privateKey, apiKeyId and issuerId from your Apple App Store Connect account
const privateKey = fs.readFileSync("/Users/silverlabs/Downloads/AuthKey_Q4YJKVUADW.p8") // this is the file you can only download once and should treat like a real, very precious key.
const apiKeyId = "Q4YJKVUADW"
const issuerId = "69a6de7e-6504-47e3-e053-5b8c7c11a4d1"
let now = Math.round((new Date()).getTime() / 1000); // Notice the /1000 
let nowPlus20 = now + 1199 // 1200 === 20 minutes

let payload = {
    "iss": issuerId,
    "exp": nowPlus20,
    "aud": "appstoreconnect-v1",
    //"scope":["GET /v1/apps?filter[platform]=IOS"]
}

let signOptions = {
    "algorithm": "ES256", // you must use this algorythm, not jsonwebtoken's default
    header : {
        "alg": "ES256",
        "kid": apiKeyId,
        "typ": "JWT"
    }
};

let token = jwt.sign(payload, privateKey, signOptions);
console.log('@token: ', token);


sjajaj