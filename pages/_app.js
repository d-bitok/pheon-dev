// import Theme from '../src/styles/theme';

// export default function App({ Component, pageProps }) {
//   return (
//     <>
//       <Theme>
//         <Component {...pageProps} />
//       </Theme>
//     </>
//   )
// };
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
        <Component {...pageProps} />
  )
};
