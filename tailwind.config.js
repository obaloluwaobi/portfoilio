/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*./src/","./index.html","./about.html","./project.html","./contact.html"],
  theme: {
    extend: {
      fontFamily:{
        opensans:["OpenSans"],
        inter:["Inter"],},
      colors:{
        background:"#f5f5f5",
        primary:"#3498db",
        secondary:"#2c3e50",
        accent:"#e74c3c",
        textcolor:"#333333",
      },
      fontSize:{
        'title':'45px',
        'bio':'18px',
        'pro':'40px',
        'p-title':'30px',
        'p-des':'18px',
        'm-title':'24px',
        'm-bio':'14px',
        'm-pro':'20px',
        'm-p-title':'16px',
        'm-p-des':'14px',
      },
      screens:{
        'xs':"400px",
        'xss':"600px",
        'sm': '765px',
        'md':"1000px",
        'lg':"1024px",
        'xl':"1280px",
        'tv':"200000px",

      }
    },
  },
  plugins: [],
}

