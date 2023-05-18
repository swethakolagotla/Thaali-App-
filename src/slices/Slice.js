import { createSlice } from "@reduxjs/toolkit";

export const thaaliAppSlice = createSlice({
  name: "thaaliItems",
  initialState: {
    menuItems: [
      {
        id: 1,
        image:
          "https://media.istockphoto.com/id/508374340/photo/homemade-chapati.jpg?s=612x612&w=0&k=20&c=lozsrleZ88efHFdMYCtUkyUW5mTqXVDoFp_jtI2s53Q=",
        name: "Chapati",
        price: "30",
        description:
          " Soft and Fluffy ashirvad chapathi !!... Enjoy the taste 😍",
        itemQty: 1,
      },

      {
        id: 2,
        image:
          "https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126014/images/item2_ylq0qr.jpg",
        name: "Pickle",
        price: "40",
        description: "Home Made Spicy and awesome Mango Pickle 😍",
        itemQty: 1,
      },
      {
        id: 3,
        image:
          "https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126014/images/item3_bixazb.jpg",
        name: "Curd",
        price: "50",
        description: " Fresh and Healthy Arogya Yogurt  😋 ",
        itemQty: 1,
      },
      {
        id: 4,
        image:
          "https://res.cloudinary.com/dtr0b1iwv/image/upload/v1646126014/images/item4_ndkmnh.jpg",
        name: "Rasogulla",
        price: "100",

        description: " Soft and Juicy Home Made Rasogulla 😋 ",
        itemQty: 1,
      },
      {
        id: 5,
        image:
          "https://t3.ftcdn.net/jpg/02/49/13/48/360_F_249134868_Fu2TUKJsqVD7Vd4vru2zA8j6tY4g78zC.jpg",
        name: "Daal",
        price: "140",
        description: " Tasty and Healthy Andhra Daal 😋 ",
        itemQty: 1,
      },
      {
        id: 6,
        image:
          "https://www.ruchiskitchen.com/wp-content/uploads/2020/12/Paneer-butter-masala-recipe-3-500x375.jpg",
        name: "Paneer-Butter",
        price: "280",
        description: " Soft , Spicy and Healthy panner -Butter 😋",
        itemQty: 1,
      },
    ],
    selectedItems: [],
  },
  reducers: {
    addItem: (state, actions) => {
      state.selectedItems.push(actions.payload);
    },
    removeItem: () => {},
    addQty: (state, actions) => {
      const selectedDishId = actions.payload;
      console.log(selectedDishId, "selected dish in slice add");

      state.selectedItems.filter(
        (item) => item.id === selectedDishId
      )[0].itemQty += 1;

      state.menuItems.filter(
        (item) => item.id === selectedDishId
      )[0].itemQty += 1;
    },
    decreaseQty: (state, actions) => {
      const selectedDishId = actions.payload;
      console.log(selectedDishId, "selected dish in slice decrease");

      if (
        state.menuItems.filter((item) => item.id === selectedDishId)[0]
          .itemQty <= 1
      ) {
        // DO NOTHING (COMMENTED BELOW, Cuz when creating build file, its giving error)
        // state.menuItems.filter((item) => item.id === selectedDishId)[0]
        //   .itemQty === 1;
      } else {
        state.selectedItems.filter(
          (item) => item.id === selectedDishId
        )[0].itemQty -= 1;

        state.menuItems.filter(
          (item) => item.id === selectedDishId
        )[0].itemQty -= 1;
      }
    },
    removeFromCart: (state, actions) => {
      const selectedDishId = actions.payload;

      state.selectedItems = state.selectedItems.filter(
        (item) => item.id !== selectedDishId
      );
    },
  },
});

export const { addItem, removeItem, addQty, decreaseQty, removeFromCart } =
  thaaliAppSlice.actions;

export default thaaliAppSlice.reducer;
