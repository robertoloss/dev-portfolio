
export const website = {
  name: 'website',
  type: 'document',
	title: 'Website',
  fields: [	
		{
			name: 'description',
			type: 'array',
			of: [{type: 'block'}],
			title: 'Description'
		},
		{
			name: 'about_description',
			type: 'array',
			of: [{type: 'block'}],
			title: 'About: Description'
		},
		{
			name: 'icons',
			type: 'array',
			of: [{type: 'picture'}],
			title: 'icons'
		},
  ]
}
