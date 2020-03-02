function startSearching() {
    let year = inputYear();
    alert("Năm vừa nhập vào ở thế kỉ: " + findCentury(year));
}

function inputYear() {
    let input = 0;
    while (input !== null) {
        input = prompt("Nhập vào năm cần tìm. Nhấn cancel để lưu lại năm");
        if (isNaN(input)) {
            alert("Số không hợp lệ do dữ liệu nhập vào là ký tự. Vui lòng nhập lại.");
        } else if (input === "") {
            alert("Trường không được để trống, vui lòng nhập số vào");
        } else if (Number.isInteger(input)) {
            alert("Số năm không có dạng thập phân, vui lòng nhập lại");
        } else if (input < 0) {
            alert("Số năm không có dạng âm, vui lòng nhập lại");
        } else {
            return input;
        }
    }
}

function findCentury(year) {
    let index = 1;
    let century = 100;
    while (century <= year) {
        ++index;
        century = 100 * index;
    }
    return index;
}
