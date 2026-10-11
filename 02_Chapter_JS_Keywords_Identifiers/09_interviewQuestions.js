//=============================================================================
// Interview Questions on JavaScript Identifiers Rules and Naming Conventions
//=============================================================================
let validname1 = "John"; // Valid identifier - starts with a letter
let _name2 = "Doe"; // Valid identifier - starts with an underscore
let validName3 = "Alice"; // Valid identifier - camelCase naming convention
let $name4 = "Bob"; // Valid identifier - starts with a dollar sign

let nameWithNumber5 = "Charlie"; // Valid identifier - contains numbers but does not start with a number
let _name6 = "Eve"; // Valid identifier - starts with an underscore and contains letters, numbers, and underscores
let $name7 = "Frank"; // Valid identifier - starts with a dollar sign and contains letters, numbers, and underscores
let n1_n2 = "Grace"; // Valid identifier - contains letters, numbers, and underscores
let MyVar = "Henry"; // Valid identifier - starts with a letter and follows PascalCase naming convention
let myvar = "Ivy"; // Valid identifier - starts with a letter and follows camelCase naming convention
let my_Var = "Jack"; // Valid identifier - contains letters, numbers, and underscores
// let 1invalidName = "Invalid"; // Invalid identifier - starts with a number (uncommenting this line will cause a syntax error)
// let invalid-name1 = "Invalid";  // Invalid identifier - contains a hyphen (uncommenting this line will cause a syntax error)
// let class = "Invalid"; // Invalid identifier - reserved word (uncommenting this line will cause a syntax error)
// let .var = "Invalid"; // Invalid identifier - starts with a dot (uncommenting this line will cause a syntax error)

let café = "Unicode letter é"; // Valid identifier - contains a Unicode letter
let 变量 = "Chinese characters"; // Valid identifier - contains Chinese characters
let \u0041 = "Unicode escape for A"; // Valid identifier - contains a Unicode escape sequence for the letter A
let \u005f = "Unicode escape for _"; // Valid identifier - contains a Unicode escape sequence for the underscore
