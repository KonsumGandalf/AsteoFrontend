module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      screens: {
        sm: '480px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
      },
      colors: {
        brightRed: 'hsl(12, 88%, 59%)',
        brightRedLight: 'hsl(12, 88%, 69%)',
        brightRedSupLight: 'hsl(12, 88%, 95%)',
        darkBlue: 'hsl(228, 39%, 23%)',
        darkGrayishBlue: 'hsl(227, 12%, 61%)',
        veryDarkBlue: 'hsl(233, 12%, 13%)',
        veryPaleRed: 'hsl(13, 100%, 96%)',
        veryLightGray: 'hsl(0, 0%, 98%)',

        pastelBlackOlive: 'hsla(40, 4%, 14%, 1)',
        pastelBlackEerie: 'hsla(40, 4%, 14%, 1)',
        pastelAliceBlue: 'hsla(217, 100%, 97%, 1)',
        pastelPeriwinkleCrayola: 'hsla(219, 100%, 89%, 1)',
        pastelBabyBlueEyes: 'hsla(222, 100%, 85%, 1)',
        pastelBrightLilac: 'hsla(262, 100%, 80%, 1)',
        pastelMediumPurple: 'hsla(262, 72%, 68%, 1)',

        maximumBluePurple: 'hsla(255, 100%, 86%, 1)',

      },
      fontFamily: {
        mono: "'DM Mono', monospace",
        josefin: "'Josefin Slab', serif",
        nova: "'Nova Flat', cursive",
        jura: "'Jura', sans-serif",
      },
      backgroundImage: {
        'blackAsteoIcon': "url('/public/design/icons/AsteoLogoBlack.png')",
        'whiteAsteoIcon': "url('/public/design/icons/AsteoLogoWhite.png')",
      }
    },
  },
  plugins: [],
}