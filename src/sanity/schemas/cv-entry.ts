import {
  defineArrayMember,
  defineField,
  defineType,
} from "@sanity-typed/types";


export const cvEntry = defineType({
	name: 'cvEntry',
  type: 'document',
	title: 'CV_Entry',
  fields: [
		defineField({
			name: 'order',
			type: 'number',
			title: 'Order'
		}),
		defineField({
			name: 'date',
			type: 'string',
			title: 'Date'
		}),
		defineField({
			name: 'title',
			type: 'string',
			title: 'Title'
		}),
		defineField({
			name: 'subtitle',
			type: 'string',
			title: 'Subtitle'
		}),
		defineField({
			name: 'description',
			type: 'array',
			of: [defineArrayMember({ type: 'block'})],
			title: 'Description'
		})
	]
})
