import '../styles/globals.css';
import type { AppProps } from 'next/app';
import wrapper from '../src/store/useStore';
import '../styles/globals.css';

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <Component {...pageProps} />
        </>
    );
}

export default wrapper.withRedux(MyApp); // 만든 스토어 감싸주기
