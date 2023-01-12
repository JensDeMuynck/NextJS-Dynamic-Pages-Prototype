// import fs from 'fs';
// import path from 'path';

import Default from '@/components/templates/Default';
import Contact from '@/components/templates/Contact';

const templates = {
	default: Default,
	contact: Contact,
}

export default function DynamicPage(props) {
	const { template } = props.pageData;

	const Template = templates[template];
	return <Template {...props} />;
}

export async function getServerSideProps(context) {
	// const data = JSON.parse(fs.readFileSync(path.join(process.cwd(), 'cms', 'pages.json'), 'utf-8'));

	const res = await fetch('https://raw.githubusercontent.com/JensDeMuynck/cms-pages-test/main/cms-pages.json');
	const data = await res.json();
	console.log(data);

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