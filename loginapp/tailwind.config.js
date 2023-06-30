
// /** @type {import('tailwind's').Config} */
// export const content = [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
// ];
// export const theme = {
//     extend: {},
// };
// export const plugins = [
//     require("@tailwind's/forms"),
// ];
// import { forms } from "@tailwind's/forms";

// module.exports = {
//   content: [
//     "./index.html",
//     "./src/**/*.{js,ts,jsx,tsx}",
//   ],
//   theme: {
//     extend: {},
//   },
//   plugins: [
//     forms,
//   ],
// };

/** @type {import('tailwinds').Config} */
const tailwindConfig = {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {},
    },
    plugins: [
      require(),
    ],
  };
  
  export default tailwindConfig;
//module.exports = {...require('./default-config')};
