// Tạo danh sách lớp
const Thanhvien = [
    { Hoten: "Phạm Ngọc Ánh", Gioitinh:"Nữ", Noisinh:"Thái Bình " },
    { Hoten: "Nguyễn Thị Yến Nhi",Gioitinh: "Nữ",Noisinh: "Thái Bình" },
    { Hoten: "Đỗ Hà Duyên", Gioitinh:"Nữ", Noisinh:"Nam Định" },
    { Hoten: "Ninh Thị Lành", Gioitinh:"Nữ", Noisinh:"Nam Định" },
    { Hoten: "Trần Thị Thu Huyền",Gioitinh: "Nữ",Noisinh: "Hà Nội" },
    { Hoten: "Hoàng Thị Hiền", Gioitinh:"Nữ", Noisinh:"Hải Phòng" },
    { Hoten: "Đỗ Thị Lan Hương",Gioitinh: "Nữ",Noisinh: "Hải Phòng" },
    { Hoten: "Nguyễn Quang Huy", Gioitinh:"Nam",Noisinh: "Hà Tĩnh" },
    { Hoten: "Nguyễn Công Mạnh", Gioitinh:"Nam",Noisinh: "Hà Tĩnh" }
];

// Hàm hiển thị danh sách lớp dưới dạng bảng HTML
function danhsach() {
    // Lấy phần tử HTML để chèn bảng
    const container = document.getElementById("Danh-sách");

    // Kiểm tra nếu phần tử không tồn tại
    if (!container) {
        console.error("Không tìm thấy phần tử HTML với ID 'Danh-sách'");
        return;
    }

    // Tạo nội dung bảng HTML
    const table = `
        <table >
            <thead>
                <tr>
                    <th>STT</th>
                    <th>Họ và Tên</th>
                    <th>Giới Tính</th>
                    <th>Nơi Sinh</th>
                </tr>
            </thead>
            <tbody>
                ${Thanhvien.map((hocsinh, index) => `
                    <tr>
                        <td>${index + 1}</td>
                        <td class="ht">${hocsinh.Hoten}</td>
                        <td>${hocsinh.Gioitinh}</td>
                        <td>${hocsinh.Noisinh}</td>
                    </tr>
                `).join("")}
                
            </tbody>
        </table>
    `;
    // Gắn bảng vào phần tử HTML
    container.innerHTML = table;
}

// Gọi hàm khi trang tải
window.onload = danhsach;
/*
Thanhvien.map() dùng để duyệt qua từng phần tử trong mảng Thanhvien và thực hiên một hành động trên mỗi ptu(Ở đây là tạo 1 dòng bảng <tr>)
Thanhvien.map((hocsinh, index)=>{Nội dung xử lý}) , hocsinh là đại diện cho từng học sih trong mảng, index chỉ số ptu hitai trong mảng (bđ từ 0).
`` cho phép chèn giá trị động vào chuỗi dễ dàng hơn, thay vì dùng phép nối chuỗi (+)
${index+1} In số thứ tự của học sinh, bắt đầu từ 1 thay vì 0.
${hocsinh.hoten}, ${hocsinh.gioitinh}, ${hocsinh.noisinh}: Chèn thông tin của từng học sinh (tên, giới tính, nơi sinh) vào các ô trong bảng.
Phương thức join("") kết hợp tất cả các phần tử trong mảng thành một chuỗi duy nhất, không có dấu phân cách.
*/