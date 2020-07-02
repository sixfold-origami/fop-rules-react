const page = (displayName, hover, markdown) => ({
	markdown,
	hover,
	displayname,
	headings: new Map(),
});

const heading = (displayName, hover, markdown, size=2) => (){
	displayName,
	hover,
	markdown,
	size,
});

const node = (page) => ({
	page,
	children: new Map()
})
