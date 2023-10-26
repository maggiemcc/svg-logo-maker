function shapes(data) {
    if (data.shape == "circle"){
    return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <circle cx="150" cy="100" r="80" fill="${data.sColor}"></circle>
    <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.tColor}">${data.text}</text>
    </svg>
    `
    } else if (data.shape == "square"){
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect width="100%" height="100%" fill="${data.sColor}"></rect>
        <text x="150" y="125" font-size="60" text-anchor="middle" fill="${data.tColor}">${data.text}</text>
        </svg>
        `
    } else if (data.shape == "triangle"){
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <path d="M150 0 L15 200 L280 200 Z" fill="${data.sColor}"></path>
        <text x="150" y="150" font-size="60" text-anchor="middle" fill="${data.tColor}">${data.text}</text>
        </svg>
        `
    } 
};

module.exports = shapes;
