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

	const res = await fetch('https://raw.githubusercontent.com/JensDeMuynck/NextJS-Dynamic-Pages-Prototype/master/cms/pages.json?token=GHSAT0AAAAAAB5NQ3O7HZVBAZVX4G42L65KY6APORQ');
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