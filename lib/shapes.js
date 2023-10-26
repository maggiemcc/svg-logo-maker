function shapes(data) {
    if (data.fontFamily == "Georgia"){
        var fontFamily = "Georia, 'Serif'";
    } else if (data.fontFamily == "Gill Sans"){
        var fontFamily = "Gill Sans, 'sans-serif'";
    } else if (data.fontFamily == "Arial"){
        var fontFamily = "Arial, 'sans-serif'";
    } else if (data.fontFamily == "Courier New"){
        var fontFamily = "Courier New, 'Monospace'";
    } else if (data.fontFamily == "Copperplate"){
        var fontFamily = "Copperplate, 'Fantasy'";
    };


    if (data.shape == "circle"){
    return `
    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
    <circle cx="150" cy="100" r="90" fill="${data.sColor}"></circle>
    <text x="150" y="125" font-size="60" text-anchor="middle" font-family="${fontFamily}" fill="${data.tColor}">${data.text}</text>
    </svg>
    `
    } else if (data.shape == "square"){
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <rect width="100%" height="100%" fill="${data.sColor}"></rect>
        <text x="150" y="125" font-size="60" text-anchor="middle" font-family="${fontFamily}" fill="${data.tColor}">${data.text}</text>
        </svg>
        `
    } else if (data.shape == "triangle"){
        return `
        <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="300" height="200">
        <path d="M150 0 L15 200 L280 200 Z" fill="${data.sColor}"></path>
        <text x="150" y="150" font-size="60" text-anchor="middle" font-family="${fontFamily}" fill="${data.tColor}">${data.text}</text>
        </svg>
        `
    } 
};

module.exports = shapes;
