// let i;
// let j;
// let row;
// let n = 20;



// for(i = 0; i < n; i++){
//     row = ""
//     for(j = 0; j < n; j++){
//         if(i == 0 || i == n - 1 || j == 0 || j == n - 1 || j == Math.floor(n/2) || i == Math.floor(n/2) || i == j || i + j == n - 1 || i + j == Math.floor(n / 2)  || i - j == Math.floor(n / 2)  || i + j == (n - 1) + Math.floor(n / 2) || j - i == (Math.floor(n / 2))){
//             row = row + "*";
//         }

//         else{
//             row = row + " ";
//         }
//     }
//     console.log(row);
// }

// // OR

// // for(i = 1; i <= n; i++){
// //     row = ""
// //     for(j = 1; j <= n; j++){
// //         if(i == 1 || i == n || j == 1 || j == n){
// //             row = row + "*";
// //         }

// //         else{
// //             row = row + " ";
// //         }
// //     }
// //     console.log(row);
// // }

let userName = "Sarah";
let userRole = "Admin";

function checkAccess(){
    let hasAccess = false;
    if(userRole === "Admin"){
        let welcomeMsg = `${userName} you have admin access.`;
        hasAccess = true;
        console.log(welcomeMsg);
    }

    console.log("Has access", hasAccess)
}

checkAccess()