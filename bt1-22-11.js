function chuyenDoiNhietDo() {
    /*Lấy giá trị từ ô nhập*/
    const nhietDoC=parseFloat(document.getElementById('celsius').value);
    /*kiểm tra nếu người dùng ko nhập số*/
    if(isNaN(nhietDoC)) {
        document.getElementById('ketQua').textContent="Vui lòng nhập một số hợp lệ.";
        return;
    }
    /*Chuyển đổi từ đọ C sang độ F*/
    const nhietDoF=(nhietDoC * 9 / 5 ) + 32;
    /*hiển thị kết quả*/
    document.getElementById('ketQua').textContent=
        `${nhietDoC}độ C tương đương ${nhietDoF.toFixed(2)}độ F.`;
}