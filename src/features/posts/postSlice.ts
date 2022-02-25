import { createSlice } from "@reduxjs/toolkit";

const initialState = [
  {
    id: 1,
    email: "batz.mortimer@yahoo.com",
    first_name: "Jana Strassman",
    last_name: "Strassman",
    avatar: "https://reqres.in/img/faces/7-image.jpg",
  },
  {
    id: 2,
    email: "ullrich.owen@kristin.biz",
    first_name: "Jube Browman",
    last_name: "Ferguson",
    avatar: "https://reqres.in/img/faces/8-image.jpg",
  },
  {
    id: 3,
    email: "kale_lehner@yahoo.com",
    first_name: "Kwak Seong Min",
    last_name: "Funke",
    avatar: "https://reqres.in/img/faces/9-image.jpg",
  },
  {
    id: 4,
    email: "ullrich.owen@kristin.biz",
    first_name: "Leon Hunt",
    last_name: "Fields",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 5,
    email: "ullrich.owen@kristin.biz",
    first_name: "Nitithron Prinya",
    last_name: "Edwards",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 6,
    email: "kale_lehner@yahoo.com",
    first_name: "Nombeko Mabandia",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
  {
    id: 7,
    email: "ullrich.owen@kristin.biz",
    first_name: "Nwoye Akachi",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/11-image.jpg",
  },
  {
    id: 8,
    email: "kale_lehner@yahoo.com",
    first_name: "Paulina Gayoso",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
  {
    id: 9,
    email: "ullrich.owen@kristin.biz",
    first_name: "Phawta Tuntayakul",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/12-image.jpg",
  },
  {
    id: 10,
    email: "ullrich.owen@kristin.biz",
    first_name: "Siri Jakobsson",
    last_name: "Howell",
    avatar: "https://reqres.in/img/faces/10-image.jpg",
  },
];
const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {},
});

export default postsSlice.reducer;
