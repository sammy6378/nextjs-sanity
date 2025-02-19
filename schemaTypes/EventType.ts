import { defineField,defineType } from "sanity";


export const eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    fields:[
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: "slug",
            type: 'slug'
        }),
        defineField({
            name: 'eventType',
            type: 'string'
        }),
        defineField({
            name: 'date',
            type: "datetime"
        }),
        defineField({
            name: 'venue',
            type: 'string'
        }),
        defineField({
            name: 'details',
            type: 'array',
            of: [{type: 'block'}]
        }),
        defineField({
            name: 'organizer',
            type: 'reference',
            to: [{ type: 'user' }]
        })
    ]
})