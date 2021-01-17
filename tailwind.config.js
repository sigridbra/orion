module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  theme: {
    screens: {
      xxxsm: "360px",
      xxsm: "450px",
      minIFrameWidth: "500px",
      xsm: "580px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      semilg: "1110px",
      xl: "1280px",
      xxl: "2040px",
    },
    extend: {
      colors: {
        themeBlue: "#4071b3",
        darkBlue: "#355379",
        darkestBlue: "#223a5c",
        white: "#ffffff",

      },
      backgroundColor: (theme) => theme("colors"),
      height: {
        sm: '8px',
        md: '16px',
        lg: '60vh',
        xl: '80vh',
       }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
