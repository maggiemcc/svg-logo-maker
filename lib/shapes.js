// function shapes(data) {
//     <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
//         <circle cx="150" cy="100" fill="green"></circle>
//         <text x="150" y="125" font-size="60" text-anchor="middle" fill="white">SVG</text>
//     </svg>
// }

function shapes(data) {
    return `<svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <circle cx="150" cy="100" r="80" fill="${data.sColor}"></circle>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.tColor}">${data.text}</text>
    </svg>`

//     `
//     # ${data.text}   
//     # ${data.tColor}   
//     # ${data.shape}   
//     # ${data.sColor}  
// `

}

module.exports = shapes;
