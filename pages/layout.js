import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

export default function Layout({ children }) {
	return (
		<div className='app'>
			<Header />
			{children}
			<Footer />
		</div>
	)
}