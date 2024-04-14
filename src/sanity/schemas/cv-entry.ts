
export const cvEntry = {
	name: 'cvEntry',
  type: 'document',
	title: 'CV_Entry',
  fields: [
		{
			name: 'order',
			type: 'number',
			title: 'Order'
		},
		{
			name: 'date',
			type: 'string',
			title: 'Date'
		},
		{
			name: 'title',
			type: 'string',
			title: 'Title'
		},
		{
			name: 'subtitle',
			type: 'string',
			title: 'Subtitle'
		},
		{
			name: 'description',
			type: 'array',
			of: [{ type: 'block'}],
			title: 'Description'
		}
	]
}
