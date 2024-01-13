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
			name: 'Picture',
			type: 'picture',
			title: 'Picture'
		}),
		defineField({
			name: 'slug',
			type: 'text',
			title: 'Slug'
		}),
  ]
})
