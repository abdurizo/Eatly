/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
     "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      fontFamily:{
        poppins_medium:["Poppins-Medium","sans-serif"],
        poppins_semiBold:["Poppins-SemiBold","sans-serif"],
        poppins_bold:["Poppins-Bold","sans-serif"],
        inter_regular:["Inter_18pt-Regular","sans-serif"],
        inter_medium:["Inter_18pt-Medium","sans-serif"],
        inter_bold:["Inter_18pt-Bold","sans-serif"],
        publicSans_bold:["PublicSans-Bold","sans-serif"],
        manrope_regular:["Manrope-Regular","sans-serif"],
        manrope_semiBold:["Manrope-SemiBold","sans-serif"],
        manrope_bold:["Manrope-Bold","sans-serif"],
        manrope_extraBold:["Manrope-ExtraBold","sans-serif"],
      }
    },
  },
  plugins: [],
}

