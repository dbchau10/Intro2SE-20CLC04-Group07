export const ItemData = [
  {
    id: 1,
    title: 'Laptop cũ phục vụ học tập',
    status: 1,
    rating: 5.0,
    borrowed: 220,
    imagePath: require('../../assets/pictures/laptop.jpg')
  },
  {
    id: 2,
    title: 'Camera chụp cực nét',
    status: 1,
    rating: 5.0,
    borrowed: 210,
    imagePath: require('../../assets/pictures/camera.jpg')
  },
  {
    id: 3,
    title: 'Sách làm lại cuộc đời',
    status: 0,
    rating: 5.0,
    borrowed: 200,
    imagePath: require('../../assets/pictures/book.jpg')

  },
  {
    id: 4,
    title: 'Laptop cũ phục vụ học tập',
    status: 1,
    rating: 5.0,
    borrowed: 220,
    imagePath: require('../../assets/pictures/laptop.jpg')
  },
  {
    id: 5,
    title: 'Camera chụp cực nét',
    status: 1,
    rating: 5.0,
    borrowed: 210,
    imagePath: require('../../assets/pictures/camera.jpg')
  },
  {
    id: 6,
    title: 'Sách làm lại cuộc đời',
    status: 0,
    rating: 5.0,
    borrowed: 200,
    imagePath: require('../../assets/pictures/book.jpg')

  }
];
export const commentData = [
  {
    id: 1,
    name: 'trevaxxie',
    value: 'Sản phẩm xài chất lượng. Cho 5 sao!',
    date: '20/12/2022',
    imagePath: require('../../assets/pictures/book.jpg')
  },
  {
    id: 2,
    name: 'mgik2y',
    value: 'Sẽ mượn lại!',
    date: '19/10/2022',
    imagePath: require('../../assets/pictures/book.jpg')
  },
  {
    id: 3,
    name: 'akarimo123',
    value: 'Chủ sốp đẹp trai. Đánh giá tốt!',
    date: '3/5/2022',
    imagePath: require('../../assets/pictures/book.jpg')
  },

];

export const borrowRequest =[
  {
    id: 1,
    username: 'aka2k2',
    imagePath: require('../../assets/pictures/avatar.jpg'),
    rating: 3.5,
    body: 'Mình sắp thi học kì òi mà mình hong có máy để thi',
    borrowDate: '02/01/2023',
    returnDate: '12/01/2023'

  },
  {
    id: 2,
    username: 'bimbim123',
    imagePath: require('../../assets/pictures/avatar.jpg'),
    rating: 4,
    body: 'Cho mình mượn gấp với huhu',
    borrowDate: '01/01/2023',
    returnDate: '12/01/2023'

  },
  {
    id: 3,
    username: 'aka2k2',
    imagePath: require('../../assets/pictures/avatar.jpg'),
    rating: 5,
    body: 'Mình cần máy để làm code. Cảm ơn bạn!',
    borrowDate: '10/01/2023',
    returnDate: '20/01/2023'

  }
];

export const returnRequest =[
  {
    id: 1,
    username: 'aka2k2',
    imagePath: require('../../assets/pictures/avatar.jpg'),
    rating: 3.5,
    returnDate: '10/01/2023',
    returnPlace: 'Tòa I Trường ĐH KHTN CS2'

  },
  {
    id: 2,
    username: 'bimbim123',
    imagePath: require('../../assets/pictures/avatar.jpg'),
    rating: 4,
    returnDate: '10/01/2023',
    returnPlace: 'Tòa E Trường ĐH KHTN CS1' 

  },
  {
    id: 3,
    username: 'aka2k2',
    imagePath: require('../../assets/pictures/avatar.jpg'),
    rating: 5,
    returnDate: '10/01/2023',
    returnPlace: 'Tòa nhà thể chất'

  }
];
// IP hcmus public
// export const ip = "10.126.3.69";
export const ip = "192.168.1.10";
export const port = "3000";