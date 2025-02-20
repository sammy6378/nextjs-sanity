import { defineField, defineType } from "sanity";

// email regex
const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

// password regex
const passwordRegex = /^(?=.*[A-Z])(?=.*[a-z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

export const userType = defineType({
    name: 'user',
    title: 'User',
    type: 'document',

    fields:[
        defineField({
            name: 'name',
            type: 'string'
        }),
        defineField({
            name: 'username',
            type:'string'
        }),
        defineField({
            name: 'email',
            type: 'string',
            validation: Rule => Rule.email().regex(emailRegex).error('Invalid Email')
        }),
        defineField({
            name: 'password',
            type: 'string',
            validation: Rule => Rule.regex(passwordRegex).error('Password must be at least 8 characters, at least 1 uppercase, at least 1 lowercase, and at least 1 numeric')
        }),
        defineField({
            name: 'events',
            type: 'array',
            of: [{ type: 'reference', to: [{ type: 'event' }] }]
        })
    ]
})