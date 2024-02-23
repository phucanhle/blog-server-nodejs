project-root/
│
├─── src/
│       ├─── controllers/ # Thư mục chứa các logic xử lý yêu cầu từ client
│       ├─── models/ # Thư mục chứa các định nghĩa mô hình dữ liệu
│       ├─── routes/ # Thư mục chứa các tuyến đường API
│       ├─── services/ # Thư mục chứa các logic xử lý nghiệp vụ phức tạp
│       └─── database/ # Thư mục chứa các tập tin liên quan đến cơ sở dữ liệu
│           ├─── migrations/ # Thư mục chứa các tập tin di chuyển cơ sở dữ liệu (nếu bạn sử dụng một hệ thống di  
│           │ chuyển như Knex)
│           ├─── seeds/ # Thư mục chứa các tập tin giống (nếu bạn sử dụng một hệ thống như Knex)
│           └─── connection.js # Tập tin chứa logic kết nối đến cơ sở dữ liệu
│
├─── config/ # Thư mục chứa các tập tin cấu hình ứng dụng
│
├─── public/ # Thư mục chứa các tài nguyên tĩnh (ví dụ: hình ảnh, CSS, JavaScript)
│
├─── tests/ # Thư mục chứa các bài kiểm tra (ví dụ: unit tests, integration tests)
│
├─── node_modules/ # Thư mục chứa các module của Node.js (được tạo ra tự động khi bạn cài đặt các module thông qua npm hoặc yarn)
│
├─── .gitignore # Tập tin chỉ định các tệp và thư mục không được theo dõi bởi Git
├─── package.json # Tập tin chứa thông tin về ứng dụng và các phụ thuộc của nó
├─── README.md # Tập tin chứa thông tin mô tả về dự án
├─── server.js # Tập tin khởi chạy ứng dụng
└─── yarn.lock (hoặc package-lock.json) # Tập tin chứa thông tin cụ thể về các phiên bản module đã cài đặt (được tạo ra tự động khi bạn cài đặt các module)
