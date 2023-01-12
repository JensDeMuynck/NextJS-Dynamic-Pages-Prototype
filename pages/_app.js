import App from 'next/app';

import '../styles/globals.scss'
import Layout from './layout'

function MyApp({ Component, pageProps }) {
	return (
		<Layout>
			<Component {...pageProps} />
		</Layout>
	)
}

MyApp.getInitialProps = async (appContext) => {
    // calls page's `getInitialProps` and fills `appProps.pageProps`
    const appProps = await App.getInitialProps(appContext);
	console.log({appContext});

    return { ...appProps };
};

export default MyApp;
