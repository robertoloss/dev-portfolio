
export const project = {
  name: 'project',
  type: 'document',
	title: 'Projects',
  fields: [	
		{
			name: 'order',
			type: 'number',
			title: 'Order'
		},
    {
      name: 'name',
      type: 'string',
      title: 'Project Name'
    },
		{
			name: 'description',
			type: 'array',
			of: [{type: 'block'}],
			title: 'Description'
		},	
		{
			name: 'carousel',
			type: 'array',
			of: [{ type: 'picture'}],
			title: 'Carousel'
		},
		{
			name: 'stack',
			title: 'Bubble or what?',
			type: 'string',
			description: 'Programming language (or Bubble)',
			options: {
				layout: 'radio',
				list: [
					{ title: 'React', value: 'react' },
					{ title: 'Bubble', value: 'bubble' },
					{ title: 'Rust', value: 'rust'},
					{ title: 'C++', value: 'cpp' },
					{ title: 'Python', value: 'python' },
					{ title: 'Javascript', value: 'javascript' },
				],
			}
		},
		{
			name: 'tech',
			title: 'Tech',
			type: 'array',
			of: [{ type: 'string'}],
			description: 'add more stuff (if applicable)',
			options: {
				list: [
					{ title: 'Vite', value: 'vite' },
					{ title: 'Tailwind', value: 'tailwind' },
					{ title: 'React Router', value: 'react-router'},
					{ title: 'Typescript', value: 'typescript' },
				]
			}
		},
		{
			name: 'section',
			title: 'Section',
			type: 'string',
			description: 'The section in the home page',
			options: {
				layout: 'radio',
				list: [
					{ title: 'Recent Projects', value: 'recent'},
					{ title: 'Other Stuff', value: 'other'},
					{ title: 'Past', value: 'past'},
				]
			}
		},
		{
			name: 'github',
			type: 'string',
			title: 'Github'
		},
		{
			name: 'website',
			type: 'string',
			title: 'Website'
		},
		{
			name: 'slug',
			type: 'text',
			title: 'Slug'
		},
  ]
}
