// import all images from assets/images directory
import img01 from "../all-images/cars-img/01 Aurus белый 1.jpg";
import img02 from "../all-images/cars-img/02 Aurus чёрный 1.jpg";
import img03 from "../all-images/cars-img/03 Aurus золотой 1.jpg";
import img04 from "../all-images/cars-img/04 Кадилак Эскалейд Пикап 1.jpg";
import img05 from "../all-images/cars-img/05 Кадилак Эскалейд 2022 1.jpg";
import img06 from "../all-images/cars-img/06 Кадилак Эскалейд 1.jpg";


const carData = [
  {
    id: 1,
    brand: "Aurus",
    rating: 112,
    carName: "Aurus white",
    imgUrl: img01,
    model: "Senat",
    price: 350,
    speed: "200 км/ч",
    gps: "GPS Навигация",
    seatType: "Сиденья с подогревом",
    automatic: "Автоматическая коробка передач",
    description:
      " Российский автомобиль представительского класса.Выпускается в двух типах кузова - седан «Aurus Senat» и лимузин «Aurus Senat Limousine». ",
  },

  {
    id: 2,
    brand: "Aurus",
    rating: 102,
    carName: "Aurus black",
    imgUrl: img02,
    model: "Senat",
    price: 350,
    speed: "200 км/ч",
    gps: "GPS Навигация",
    seatType: "Сиденья с подогревом",
    automatic: "Автоматическая коробка передач",
    description:
      " Российский автомобиль представительского класса.Выпускается в двух типах кузова - седан «Aurus Senat» и лимузин «Aurus Senat Limousine».",
  },

  {
    id: 3,
    brand: "Aurus",
    rating: 132,
    carName: "Aurus golden",
    imgUrl: img03,
    model: "Senat",
    price: 365,
    speed: "200 км/ч",
    gps: "GPS Навигация",
    seatType: "Сиденья с подогревом",
    automatic: "Автоматическая коробка передач",
    description:
      " Российский автомобиль представительского класса.Выпускается в двух типах кузова - седан «Aurus Senat» и лимузин «Aurus Senat Limousine».",
  },

  {
    id: 4,
    brand: "Cadillac",
    rating: 102,
    carName: "Cadillac ESCALADE pickup",
    imgUrl: img04,
    model: "ESCALADE pickup",
    price: 230,
    speed: "180 км/ч",
    gps: "GPS Навигация",
    seatType: "Сиденья с подогревом",
    automatic: "Автоматическая коробка передач",
    description:
      " Полноразмерный внедорожник, выпускаемый Cadillac, являющимся люксовым подразделением General Motors. ",
  },

  {
    id: 5,
    brand: "Cadillac",
    rating: 94,
    carName: "Cadillac ESCALADE",
    imgUrl: img05,
    model: "ESCALADE-2022",
    price: 245,
    speed: "180 км/ч",
    gps: "GPS Навигация",
    seatType: "Сиденья с подогревом",
    automatic: "Автоматическая коробка передач",
    description:
      " Полноразмерный внедорожник, выпускаемый Cadillac, являющимся люксовым подразделением General Motors. ",
  },

  {
    id: 6,
    brand: "Cadillac",
    rating: 119,
    carName: "Cadillac ESCALADE",
    imgUrl: img06,
    model: "ESCALADE-2023",
    price: 285,
    speed: "180 км/ч",
    gps: "GPS Навигация",
    seatType: "Сиденья с подогревом",
    automatic: "Автоматическая коробка передач",
    description:
      " Полноразмерный внедорожник, выпускаемый Cadillac, являющимся люксовым подразделением General Motors. ",
  },
  
];

export default carData;
