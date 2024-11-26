function calculateRectangle() {
    const length = parseFloat(document.getElementById("rectangle-length").value);
    const width = parseFloat(document.getElementById("rectangle-width").value);

    if (isNaN(length) || isNaN(width) || length <= 0 || width <= 0) {
        document.getElementById("rectangle-result").textContent = "Vui lòng nhập chiều dài và chiều rộng hợp lệ.";
        return;
    }

    const area = length * width;
    document.getElementById("rectangle-result").textContent = `Diện tích hình chữ nhật: ${area.toFixed(2)}`;
}

function calculateTriangle() {
    const base = parseFloat(document.getElementById("triangle-base").value);
    const height = parseFloat(document.getElementById("triangle-height").value);

    if (isNaN(base) || isNaN(height) || base <= 0 || height <= 0) {
        document.getElementById("triangle-result").textContent = "Vui lòng nhập cạnh đáy và chiều cao hợp lệ.";
        return;
    }

    const area = (base * height) / 2;
    document.getElementById("triangle-result").textContent = `Diện tích hình tam giác: ${area.toFixed(2)}`;
}

function calculateSquare() {
    const side = parseFloat(document.getElementById("square-side").value);

    if (isNaN(side) || side <= 0) {
        document.getElementById("square-result").textContent = "Vui lòng nhập cạnh hợp lệ.";
        return;
    }

    const area = side * side;
    document.getElementById("square-result").textContent = `Diện tích hình vuông: ${area.toFixed(2)}`;
}