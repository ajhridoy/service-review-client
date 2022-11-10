import React from 'react';

const Review = ({review}) => {
    const {name, message, photourl} = review;
    return (
        <div className="my-8 text-gray-100">
	<div>
		<div className="flex flex-col max-w-xsm mx-4 my-6 shadow-lg">
			<div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 bg-gray-900">
				<p className="relative px-6 py-1 text-lg italic text-center text-gray-100">
					{message}
				</p>
			</div>
			<div className="flex flex-col items-center justify-center p-8 rounded-b-lg bg-violet-400 text-gray-900">
				<img src={photourl} alt="" className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full bg-gray-500 bg-gray-700" />
				<p className="text-xl font-semibold leading-tight">{name}</p>
			</div>
		</div>
	</div>
</div>
    );
};

export default Review;