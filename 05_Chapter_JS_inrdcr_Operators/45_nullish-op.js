let amul = null; // Here, the variable 'amul' is assigned a null value. The nullish coalescing operator (??) is used to provide a default value in case 'amul' is null or undefined. In this case, since 'amul' is null, the expression will evaluate to "NANDANI Milk".
let val = amul ?? "NANDANI Milk";
console.log(val);


let api_response = null; // Here, the variable 'api_response' is assigned a null value. The nullish coalescing operator (??) is used to provide a default value in case 'api_response' is null or undefined. In this case, since 'api_response' is null, the expression will evaluate to "{}".
let responsedata = api_response ?? "{}";
console.log(responsedata);

let api_response1 = "Praveen"; // Here, the variable 'api_response1' is assigned a string value. The nullish coalescing operator (??) is used to provide a default value in case 'api_response1' is null or undefined. In this case, since 'api_response1' is not null or undefined, the expression will evaluate to "Praveen".
let responsedata1 = api_response1 ?? "{}";
console.log(responsedata1);

let amul1; // Here, the variable 'amul1' is declared but not assigned a value, so it is undefined. The nullish coalescing operator (??) is used to provide a default value in case 'amul1' is null or undefined. In this case, since 'amul1' is undefined, the expression will evaluate to "NANDANI Milk".
let val1 = amul1 ?? "Milk";
console.log(val1);