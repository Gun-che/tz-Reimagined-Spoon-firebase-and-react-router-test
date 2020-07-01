import img1 from './Components/Item/img/1.jpg';
import img2 from './Components/Item/img/2.jpg';
import img3 from './Components/Item/img/3.jpg';
import img4 from './Components/Item/img/4.jpg';
import img5 from './Components/Item/img/5.jpg';
import img6 from './Components/Item/img/6.jpg';
import img7 from './Components/Item/img/7.jpg';
import img8 from './Components/Item/img/8.jpg';
import img9 from './Components/Item/img/9.jpg';
import img10 from './Components/Item/img/10.jpg';
import img11 from './Components/Item/img/11.jpg';
import img12 from './Components/Item/img/12.jpg';
import img13 from './Components/Item/img/13.jpg';
import img14 from './Components/Item/img/14.jpg';
import img15 from './Components/Item/img/15.jpg';
import img16 from './Components/Item/img/16.jpg';
import img17 from './Components/Item/img/17.jpg';
import img18 from './Components/Item/img/18.jpg';

let goods = [
  {
    name: 'Video camera',
    price: 399,
    img: img1,
    id: 1
  },
  {
    name: 'Printer',
    price: 799,
    img: img2,
    id: 2
  },
  {
    name: 'Camera',
    price: 399,
    img: img3,
    id: 3
  },
  {
    name: 'Smartphone',
    price: 349,
    img: img4,
    id: 4
  },
  {
    name: 'e-clock',
    price: 199,
    img: img5,
    id: 5
  },
  {
    name: 'Mobile phone',
    price: 99,
    img: img6,
    id: 6
  },
  {
    name: 'Radio set',
    price: 49,
    img: img7,
    id: 7
  },
  {
    name: 'Ipad',
    price: 399,
    img: img8,
    id: 8
  },
  {
    name: 'e-book pad',
    price: 149,
    img: img9,
    id: 9
  },
  {
    name: 'Old phone',
    price: 49,
    img: img10,
    id: 10
  },
  {
    name: 'Mobile phone with camera',
    price: 129,
    img: img11,
    id: 11
  },
  {
    name: 'Sucks pad',
    price: 199,
    img: img12,
    id: 12
  },
  {
    name: 'Flash card',
    price: 29,
    img: img13,
    id: 13
  },
  {
    name: 'Accumulator',
    price: 199,
    img: img14,
    id: 14
  },
  {
    name: 'Action camera',
    price: 249,
    img: img15,
    id: 15
  },
  {
    name: 'Cool e-book',
    price: 299,
    img: img16,
    id: 16
  },
  {
    name: 'Iphone',
    price: 549,
    img: img17,
    id: 17
  },
  {
    name: 'NoteBook',
    price: 449,
    img: img18,
    id: 18
  },
] 

let goodsAPI = {
  goods: goods,
  get: function(id) {
    let obj = 'not found';
    this.goods.forEach(el => {
      if (+el.id === (+id)) {
        obj = el;
      }
    })
    return obj;
  },
  all: function() {
    return this.goods;
  },
}

export default goodsAPI;