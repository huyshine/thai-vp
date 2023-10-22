# Sử dụng hình ảnh Node.js 18 làm hình ảnh cơ sở
FROM node:18 AS build

# Thiết lập thư mục làm việc
WORKDIR /app

# Sao chép tệp package.json và package-lock.json để cài đặt các phụ thuộc
COPY package*.json ./

# Cài đặt phụ thuộc
RUN npm install

# Sao chép mã nguồn ứng dụng
COPY . .

# Biên dịch ứng dụng Angular
RUN npm run build

# Sử dụng hình ảnh nginx làm hình ảnh cơ sở cho giai đoạn sản xuất
FROM nginx

# Sao chép tệp cấu hình Nginx của bạn
COPY nginx.conf /etc/nginx/nginx.conf

# Sao chép tệp ứng dụng đã biên dịch từ giai đoạn trước
COPY --from=build /app/dist /usr/share/nginx/html

# Port mặc định của Nginx là 80, có thể cần chỉnh sửa tùy theo yêu cầu
EXPOSE 80

# Lệnh khởi chạy Nginx trong container
CMD ["nginx", "-g", "daemon off;"]
