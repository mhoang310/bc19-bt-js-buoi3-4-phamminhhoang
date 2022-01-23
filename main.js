// Bài 1: Tính lương nhân viên
/*
- Mô hình 3 khối:
- Khối 1: người dùng nhập Lương 1 ngày, Số ngày làm

- Khối 2: 
-   Bước 1: Nắm bắt sự kiện của nút để bắt đầu tính toán
- 	Bước 2: Tạo biến cho luongNgay, soNgay, luongNV
-	Bước 3: Gán giá trị cho soNgay
-	Bước 4: luongNgay = 100000;
-	Bước 5: luongNV = luongNgay * soNgay;
-	Bước 6: in kết quả luongNV ra màn hình
- 
- Khối 3:
- In kết quả luongNV
*/
const luongEl = document.getElementById('luong')

luongEl.onclick = function(evt) {
    console.log(evt.target) // Tra ra doi tuong phat sinh ra event

    const soNgay = +document.getElementById('soNgay').value;
    const luongNgay = +document.getElementById('luongNgay').value;    

    const luongNV = soNgay * luongNgay;    

    const wrapperEl = document.getElementById('luongNV-wrapper');
    const luongNVEl = document.getElementById('luongNVEl');

    wrapperEl.style.display = "block";
    luongNVEl.innerHTML = luongNV.toLocaleString();
}

// Bài 2: Tính giá trị trung bình
/*
- Mô hình 3 khối:
- Khối 1: người dùng nhập vào Số thực 1, Số thực 2, Số thực 3, Số thực 4, Số thực 5   

- Khối 2:
-   Bước 1: Nắm bắt sự kiện của nút để bắt đầu tính toán 
- 	Bước 2: Tạo biến cho a1, a2, a3, a4, a5, gttb
-	Bước 3: Gán giá trị cho a1, a2, a3, a4, a5
-	Bước 4: gttb = Math.floor((a1 + a2 + a3 + a4 + a5) / 5);
-	Bước 5: in kết quả gttb ra màn hình
-	 
- Khối 3:
- In kết quả Giá trị trung bình
*/
const trungbinhEl = document.getElementById('trungbinh')

trungbinhEl.onclick = function(evt) {
    console.log(evt.target) // Tra ra doi tuong phat sinh ra event

    const a1 = +document.getElementById('a1').value;
    const a2 = +document.getElementById('a2').value;
    const a3 = +document.getElementById('a3').value;
    const a4 = +document.getElementById('a4').value;
    const a5 = +document.getElementById('a5').value;        

    const gttb = Math.floor((a1 + a2 + a3 + a4 + a5) / 5);    

    const wrapperEl = document.getElementById('gttb-wrapper');
    const gttbEl = document.getElementById('gttbEl');

    wrapperEl.style.display = "block";
    gttbEl.innerHTML = gttb.toLocaleString();
}

// Bài 3: Quy đổi tiền
/*
- Mô hình 3 khối:
- Khối 1: người dùng nhập vào Giá USD, Số tiền USD

- Khối 2: 
-   Bước 1: Nắm bắt sự kiện của nút để bắt đầu tính toán
- 	Bước 2: Tạo biến cho giaUSD, soUSD, stqd
-	Bước 3: Gán giá trị cho soUSD
-	Bước 4: giaUSD = 23500;
-	Bước 5: stqd = soUSD * giaUSD;
-   Bước 6: in kết quả stqd ra màn hình
-	 
- Khối 3:
- In kết quả Số tiền quy đổi
*/
const quyDoiEl = document.getElementById('quyDoi')

quyDoiEl.onclick = function(evt) {
    console.log(evt.target) // Tra ra doi tuong phat sinh ra event

    const soUSD = +document.getElementById('soUSD').value;
    const giaUSD = +document.getElementById('giaUSD').value;    

    const stqd = soUSD * giaUSD;    

    const wrapperEl = document.getElementById('stqd-wrapper');
    const stqdEl = document.getElementById('stqdEl');

    wrapperEl.style.display = "block";
    stqdEl.innerHTML = stqd.toLocaleString();
}

// Bài 4: Tính diện tích, chu vi hình chữ nhật
/*
- Mô hình 3 khối:
- Khối 1: người dùng nhập vào Chiều dài của HCN, Chiều rộng của HCN

- Khối 2:
-   Bước 1: Nắm bắt sự kiện của nút để bắt đầu tính toán 
- 	Bước 2: Tạo biến cho length, width, acreage, perimeter
-	Bước 3: Gán giá trị cho length, width
-	Bước 4: công thức: acreage = length * width;
-   Bước 5: công thức: perimeter = (length + width) * 2;
-	Bước 6: in kết quả acreage, perimeter ra màn hình
	 
- Khối 3:
- In kết quả số chương trình nhận dạng tam giác
*/
const resultEl = document.getElementById('result')

resultEl.onclick = function(evt) {
    console.log(evt.target) // Tra ra doi tuong phat sinh ra event

    const length = +document.getElementById('length').value;
    const width = +document.getElementById('width').value;    

    const acreage = (length * width) + " m2";
    const perimeter = ((length + width) * 2) + " m";    

    const wrapperEl = document.getElementById('result-wrapper');
    const acreageEl = document.getElementById('acreageEl');
    const perimeterEl = document.getElementById('perimeterEl');    

    wrapperEl.style.display = "block";
    acreageEl.innerHTML = acreage.toLocaleString();
    perimeterEl.innerHTML = perimeter.toLocaleString();

}

// Bài 5: Tính tổng 2 ký số
/*
- Mô hình 3 khối:
- Khối 1: người dùng nhập vào Số nguyên dương n có 2 ký số (34, 56,...), 34 = 3+4=7

- Khối 2:
-   Bước 1: Nắm bắt sự kiện của nút để bắt đầu tính toán 
- 	Bước 2: Tạo biến soNguyen, hangChuc, hangDV, tongCong
-	Bước 3: Gán giá trị cho soNguyen
-	Bước 4: Tách hàng chục theo công thức: hangChuc = Math.floor(soNguyen / 10);
-   Bước 5: Tách hàng đơn vị theo công thức: hangDV = Math.floor(soNguyen % 10);
-	Bước 6: tongCong = hangChuc + hangDV;
-	Bước 7: in kết quả tongCong ra màn hình

-	 
- Khối 3:
- In kết quả tổng 2 ký số
*/
const signatureEl = document.getElementById('signature')

signatureEl.onclick = function(evt) {
    console.log(evt.target) // Tra ra doi tuong phat sinh ra event

    const soNguyen = +document.getElementById('soNguyen').value;       

    const hangChuc = Math.floor(soNguyen /10);
    const hangDV = Math.floor(soNguyen %10);
    const tongCong = hangChuc + hangDV;    

    const wrapperEl = document.getElementById('signature-wrapper');
    const tongCongEl = document.getElementById('tongCongEl');       

    wrapperEl.style.display = "block";
    tongCongEl.innerHTML = tongCong.toLocaleString(); 
}
