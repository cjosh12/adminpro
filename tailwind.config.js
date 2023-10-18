/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{html,ts}",],
    darkMode: ["class", '[data-theme="dark"]'],
    theme: {
      extend: {},
    },
    plugins: [require("@tailwindcss/typography"), require("daisyui")],
    daisyui: {
      themes: [{
        myLightTheme:{
            "primary": "#E6EDE1",          
            "secondary": "#673C70",    
            "accent": "#7C7936",
            "neutral": "#FFDFB0",   
            "base-100": "#509C8D",     
            "info": "#153E5B",                    
            "success": "#6DDDA9",                     
            "warning": "#BA300E",
            error: "#D65151",
        }, 
        myDarktTheme: {
            "primary": "#BFA484",          
            "secondary": "#F6F1A5",    
            "accent": "#7C7936",
            "neutral": "#FFDFB0",   
            "base-100": "#313763",     
            "info": "#005B5E",                    
            "success": "#6DDDA9",                     
            "warning": "#BA300E",
            error: "#D65151",
        },
      },
    ],
      darkTheme: "myDarktTheme",
    },
  }