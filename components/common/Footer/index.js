import * as s from './Footer.module.scss'

export default function Footer() {
	const currentYear = new Date().getFullYear();
	return (
		<footer className={s.Footer}>
			&copy; {currentYear} Jens De Muynck
		</footer>
	)
}