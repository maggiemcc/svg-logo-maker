// function shapes(data) {
//     console.log("3.", data);
// // `<svg id="logo-1" xmlns="https://www.w3.org/2000/svg" height="200" width="300">
// //         <circle cx="50" cy="50" r="40" fill="blue" stroke="black" stroke-width="2" />
// //     </svg>`
// }

function shapes(data) {
    return `
    # ${data.text}   
    # ${data.tColor}   
    # ${data.shape}   
    # ${data.sColor}   
`
}

module.exports = shapes;
