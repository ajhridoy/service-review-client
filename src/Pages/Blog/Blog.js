import React from 'react';

const Blog = () => {
    // Difference between SQL and NoSQL
	// - What is JWT, and how does it work?
	// - What is the difference between javascript and NodeJS?
	// - How does NodeJS handle multiple requests at the same time?

    return (
        <div>
            <div className='mx-8 my-10 p-4 bg-orange-400 rounded-lg'>
                <h1 className='text-3xl font-bold mb-4'>Difference between SQL and NoSQL</h1>
                <p className='text-xl'><span className='font-bold'>The Some critical differences between SQL vs NoSQL are:</span> SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='mx-8 my-10 p-4 bg-orange-400 rounded-lg'>
                <h1 className='text-3xl font-bold mb-4'>What is JWT, and how does it work?</h1>
                <p className='text-xl'>For beginning developers, JSON stands for JavaScript Object Notation and is a text-based format for transmitting data across web applications. It stores information in an easy-to-access manner, both for developers and computers. It can be used as a data format by any programming language and is quickly becoming the preferred syntax for APIs, surpassing XML.The payload contains the claims. This is displayed as a JSON string, usually containing no more than a dozen fields to keep the JWT compact. This information is typically used by the server to verify that the user has permission to perform the action they are requesting.There are no mandatory claims for a JWT, but overlaying standards may make claims mandatory. For example, when using JWT as bearer access token under OAuth2.0, iss, sub, aud, and exp must be present. some are more common than others.</p>
            </div>
            <div className='mx-8 my-10 p-4 bg-orange-400 rounded-lg'>
                <h1 className='text-3xl font-bold mb-4'>Difference between SQL and NoSQL</h1>
                <p className='text-xl'><span className='font-bold'>The Some critical differences between SQL vs NoSQL are:</span> SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
            <div className='mx-8 my-10 p-4 bg-orange-400 rounded-lg'>
                <h1 className='text-3xl font-bold mb-4'>Difference between SQL and NoSQL</h1>
                <p className='text-xl'><span className='font-bold'>The Some critical differences between SQL vs NoSQL are:</span> SQL databases are relational, NoSQL databases are non-relational.SQL databases use structured query language and have a predefined schema. NoSQL databases have dynamic schemas for unstructured data.SQL databases are vertically scalable, while NoSQL databases are horizontally scalable.SQL databases are table-based, while NoSQL databases are document, key-value, graph, or wide-column stores.SQL databases are better for multi-row transactions, while NoSQL is better for unstructured data like documents or JSON.</p>
            </div>
        </div>
    );
};

export default Blog;