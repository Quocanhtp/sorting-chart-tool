# sorting-chart-tool
A simple website based on React JS and Node JS, which is used to sort data and sketch graph from data

---
## Installation

### Server side
1. Clone a repository to your computer: `git clone https://github.com/Quocanhtp/sorting-chart-tool.git`
2. Enter folder: `cd sorting-chart-tool`

### Client side
3. Delete the empty client folder
4. Clone a repository to your computer: `git clone https://github.com/Quocanhtp/client.git`
5. Enter folder: `cd client`
6. Install dependencies: `npm install`

## Configuration

### Server side
Open file `.env`, you can see the specific components of a connected DB string (FTECH company):

![Capture](https://user-images.githubusercontent.com/36063411/90368460-407df680-e094-11ea-81a7-6ea4aaa22054.PNG)

### Client side
- Enter folder: `cd client`
- Open file `.env`, you can see the environment variables for Username and Password, you can also use arbitrary values:

![1](https://user-images.githubusercontent.com/36063411/90368972-21cc2f80-e095-11ea-8574-5f3f9e9edb2e.PNG)

## Running the project
1. Open Terminal, and type `npm run dev`, the interface will be displayed like this:

![Capture](https://user-images.githubusercontent.com/36063411/90371499-44f8de00-e099-11ea-8876-9d5c93d63a8a.PNG)

2. Click on the button **Đăng Nhập**, the following interface will be displayed like this:

![3](https://user-images.githubusercontent.com/36063411/90371771-a15bfd80-e099-11ea-90df-7b2db3c5b792.PNG)

You can see the the dropdown label **Chọn Dịch Vụ** at the first item, then the date range picker label **Chọn Thời Gian** at the second, and finally the button **Tìm Kiếm**. When we click the button **Tìm Kiếm**, it will sort based on the service, and the date range we have chosen. 

3. The result will appear as forms of a pagination table and a line graph:

#### Pagination Data Table
![4](https://user-images.githubusercontent.com/36063411/90372491-af5e4e00-e09a-11ea-81c5-79a4d529d783.PNG)

#### Line Graph Data Chart
![5](https://user-images.githubusercontent.com/36063411/90372584-cf8e0d00-e09a-11ea-8d5e-87cf212d008d.PNG)

## License
[MIT](https://choosealicense.com/licenses/mit/)

