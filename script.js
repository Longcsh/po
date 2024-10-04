function calculate() {
    const num1 = parseFloat(document.getElementById('num1').value);
    const operation = document.getElementById('operation').value;
    const num2 = parseFloat(document.getElementById('num2').value);
    let result;

    if (isNaN(num1) || isNaN(num2)) {
        alert('Vui lòng nhập vào cả hai số.');
        return;
    }

    if (!operation) {
        alert('Vui lòng chọn phép toán.');
        return;
    }

    switch (operation) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            if (num2 === 0) {
                alert('Không thể chia cho 0.');
                return;
            }
            result = num1 / num2;
            break;
        default:
            alert('Vui lòng nhập phép toán hợp lệ.');
            return;
    }

    document.getElementById('result').value = result; // Hiển thị kết quả trong ô kết quả
}
