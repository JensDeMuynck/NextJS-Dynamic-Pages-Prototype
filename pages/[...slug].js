import Head from 'next/head';

import Default from '@/components/templates/Default';
import Contact from '@/components/templates/Contact';

const templates = {
	default: Default,
	contact: Contact,
}

export default function DynamicPage(props) {
	const { title, description, template } = props.pageData;

	const Template = templates[template];
	return (
		<>
			<Head>
				<title>{title}</title>
				<meta name="description" content={description} />
			</Head>
			<Template {...props} />
		</>
	);
}

export async function getServerSideProps(context) {
	// const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'cms', 'pages.json'), 'utf-8'));

	const res = await fetch('https://raw.githubusercontent.com/JensDeMuynck/NextJS-Dynamic-Pages-Prototype/master/cms/pages.json');
	const data = await res.json();

	const { slug } = context.params;
	const pageData = data.pages.find((page) => {
		return page.route === slug.join('/');
	});
	if (!pageData) {
		return {
			notFound: true,
		};
	}
	return {
		props: {
			pageData,
		},
	};
}