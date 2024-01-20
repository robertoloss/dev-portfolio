import { 
	defineType,
	defineField, 
	defineArrayMember, 
} from "@sanity-typed/types";

export const website = defineType({
  name: 'website',
  type: 'document',
	title: 'Website',
  fields: [	
		defineField({
			name: 'description',
			type: 'array',
			of: [defineArrayMember({type: 'block'})],
			title: 'Description'
		}),
		defineField({
			name: 'about_description',
			type: 'array',
			of: [defineArrayMember({type: 'block'})],
			title: 'About: Description'
		}),
		defineField({
			name: 'icons',
			type: 'array',
			of: [defineArrayMember({type: 'picture'})],
			title: 'icons'
		}),
  ]
})
