import { defineField,defineType } from "sanity";
import { CalendarIcon } from "@sanity/icons";

export const eventType = defineType({
    name: 'event',
    title: 'Event',
    type: 'document',
    icon: CalendarIcon,
    groups:[
        {name: 'details', title: 'Details'},
        {name: 'editorial', title: 'Editorial'}
    ],


    fields:[
        defineField({
            name: 'name',
            type: 'string',
            group: 'details'
        }),
        defineField({
            name: "slug",
            type: 'slug',
            options: {source: 'name'},
            validation: Rule => Rule.required().error('Slug is required'),
            group: 'details'
        }),
        defineField({
            name: 'eventType',
            type: 'string',
            options:{
                list: ['in-person', 'virtual'],
                layout: 'radio'
            },
            group: 'editorial'
        }),
        defineField({
            name: 'date',
            type: "datetime",
            group: 'editorial'
        }),
        defineField({
            name: 'venue',
            type: 'string',
            group: 'editorial'
        }),
        defineField({
            name: 'details',
            type: 'array',
            of: [{type: 'block'}],
            group: 'editorial'
        }),
        defineField({
            name: 'organizer',
            type: 'reference',
            to: [{ type: 'user' }]
        })
    ]
})