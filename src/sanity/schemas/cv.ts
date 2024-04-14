
export const cv = {
	name: 'cv',
	type: 'document',
	title: 'CV',
	fields: [
		{
			name: 'Name',
			type: 'string',
			title: 'Name'
		},
		{
			name: 'cvEntries',
			type: 'array',
			of: [{ type: 'cvEntry' }],
			title: 'CV_entries'
		}
	]
}
