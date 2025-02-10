/* eslint-disable react/prop-types */

/**
 * A card component that displays an image, title, and description
 * @param {Object} props - The component props
 * @param {string} props.title - The title of the card
 * @param {string} props.description - The description text of the card
 * @param {string} props.imageUrl - The URL of the image to display
 * @returns {JSX.Element} A card component
 */
export default function Card({ title, description, imageUrl }) {
    return (
        <div className='overflow-hidden bg-slate-50 duration-300 ease-out flex flex-col pb-3 rounded-xl hover:scale-105'>
            <img className='aspect-video w-full' src={imageUrl} />
            <div className='px-4'>
                <h2 className='text-2xl font-extrabold text-right'>{title}</h2>
                <p className='text-lg my-1'>
                    {description}
                </p>
            </div>
        </div>
    )
}