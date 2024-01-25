import {
  defineArrayMember,
  defineField,
  defineType,
} from "@sanity-typed/types";


export const cv = defineType({
	name: 'cv',
	type: 'document',
	title: 'CV',
	fields: [
		defineField({
			name: 'Name',
			type: 'string',
			title: 'Name'
		}),
		defineField({
			name: 'cvEntries',
			type: 'array',
			of: [defineArrayMember({ type: 'cvEntry' })],
			title: 'CV_entries'
		})
	]
})
