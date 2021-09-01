export type FontWeights =
  | "light"
  | "regular"
  | "semiBold"
  | "bold"
  | "extraBold"
  | "black";

export const fontWeightValues: { [key in FontWeights]: number } = {
  light: 200,
  regular: 400,
  semiBold: 600,
  bold: 700,
  extraBold: 800,
  black: 900
};

// const theme = createTheme({
//   palette: themePalette,
//   typography: {
//     fontFamily: "Muli",
//     h1: {
//       fontFamily: "Montserrat",
//       fontSize: makeRem(38),
//       fontWeight: makeFontWeight("semiBold"),
//       margin: `${makeRem(16)} 0`,
//       lineHeight: 1.2,

//       "@media (min-width:600px)": {
//         fontSize: makeRem(44),
//         fontWeight: makeFontWeight("regular"),
//         margin: `${makeRem(24)} 0`,
//         lineHeight: 1.2
//       }
//     },
//     h2: {
//       fontFamily: "Montserrat",
//       fontSize: makeRem(38),
//       fontWeight: makeFontWeight("regular"),
//       margin: `${makeRem(16)} 0`,

//       "@media (min-width:600px)": {
//         fontSize: makeRem(36),
//         margin: `${makeRem(24)} 0`
//       }
//     },
//     h3: {
//       fontFamily: "Montserrat",
//       fontSize: makeRem(32),
//       fontWeight: 600,
//       margin: `${makeRem(18)} 0`
//     },
//     h4: {
//       fontFamily: "Montserrat",
//       fontWeight: 600,
//       fontSize: makeRem(24),
//       margin: `${makeRem(16)} 0`
//     },
//     h5: {
//       fontFamily: "Montserrat",
//       fontWeight: 600,
//       fontSize: makeRem(18),
//       margin: `${makeRem(16)} 0`
//     },
//     subtitle1: {
//       fontFamily: "Muli",
//       fontWeight: 500,
//       fontSize: makeRem(18),
//       margin: `${makeRem(20)} 0`
//     },
//     subtitle2: {
//       fontWeight: 500,
//       fontFamily: "Muli",
//       fontSize: makeRem(16)
//     },
//     overline: {
//       fontWeight: makeFontWeight("bold"),
//       fontSize: makeRem(14),
//       lineHeight: 2
//     }
//   }
// });
