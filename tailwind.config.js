module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container:{
      fontFamily:{
        'sans':['roboto','poppins','system-ui']
      },
      height:{
        '445':'33rem',
        '505':'31.563rem',
        '50':'3.125rem'

      },
      width:{
        '445':'33rem',
        '400':'25rem'
      },
      padding:{
        lg:'8rem'
      },
      backgroundImage:{
      'dot-pattern':"url('/assets/dot-grid.png')"
      }
    },
    extend: {},
  },
  plugins: [],
}