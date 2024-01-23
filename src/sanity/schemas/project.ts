import { 
	defineField, 
	defineArrayMember, 
	defineType
} from "@sanity-typed/types";

export const project = defineType({
  name: 'project',
  type: 'document',
	title: 'Projects',
  fields: [	
		defineField({
			name: 'order',
			type: 'number',
			title: 'Order'
		}),
    defineField({
      name: 'name',
      type: 'string',
      title: 'Project Name'
    }),
		defineField({
			name: 'description',
			type: 'array',
			of: [defineArrayMember({type: 'block'})],
			title: 'Description'
		}),	
		defineField({
			name: 'carousel',
			type: 'array',
			of: [defineArrayMember({ type: 'picture'})],
			title: 'Carousel'
		}),
		defineField({
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
		}),
		defineField({
			name: 'tech',
			title: 'Tech',
			type: 'array',
			of: [defineArrayMember({ type: 'string'})],
			description: 'add more stuff (if applicable)',
			options: {
				list: [
					{ title: 'Vite', value: 'vite' },
					{ title: 'Tailwind', value: 'tailwind' },
					{ title: 'React Router', value: 'react-router'},
					{ title: 'Typescript', value: 'typescript' },
				]
			}
		}),
		defineField({
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
		}),
		defineField({
			name: 'github',
			type: 'string',
			title: 'Github'
		}),
		defineField({
			name: 'website',
			type: 'string',
			title: 'Website'
		}),
		defineField({
			name: 'slug',
			type: 'text',
			title: 'Slug'
		}),
  ]
})
