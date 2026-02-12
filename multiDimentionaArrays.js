// Create an array to store the data of the weather collected in the morning, afternoon, and evening of three consecutive days

// let ar = [
//     [25, 30, 22],
//     [23, 31, 24],
//     [26, 30, 20]
// ]

// console.log(ar)

// let i;
// let j;

// for(i = 0; i < ar.length; i++){
//     for(j = 0; j < ar[i].length; j++){
//         console.log(ar[i][j]);
//     }
// }


// TapAcademy has two centers. Each centre has two floors. Each floor has two classrooms. Create an array to store the number of students inside each classroom

let ar = [
    [
        [50, 70],
        [65, 87]
    ],
    [
        [90, 45],
        [80, 30]
    ]
];

let i;
let j;
let k;

console.log(ar)

for(i = 0; i < ar.length; i++){
    for(j = 0; j < ar[i].length; j++){
        for(k = 0; k < ar[i][j].length; k++){
            console.log(ar[i][j][k])
        }
    }
}