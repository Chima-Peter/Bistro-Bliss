import author1 from '../../assets/images/home_page/author1.webp'
import author2 from '../../assets/images/home_page/author2.webp'
import author3 from '../../assets/images/home_page/author3.webp'

type Props = {
    header: string
}

const Reviews = (props: Props) => {
    const reviews = [
        {
            title: 'The Best Restaurant',
            text: 'Last night, we dined at place and were simply blown away. From the moment we stepped in, we were enveloped in an inviting atmosphere and greeted with warm smiles.',
            author: 'Sophie Robson',
            location: 'Los Angeles, CA',
            image: author1
        },
        {
            title: 'Simply delicious',
            text: 'Place exceeded my expectations on all fronts. The ambiance was cozy and relaxed, making it a perfect venue for our anniversary dinner. Each dish was prepared and beautifully presented.',
            author: 'Matt Cannon',
            location: 'San Diego, CA',
            image: author2
        },
        {
            title: 'One of a kind restaurant',
            text: 'The culinary experience at place is first to none. The atmosphere is vibrant, the food - nothing short of extraordinary. The food was the highlight of our evening. Highly recommended.',
            author: 'Andy Smith',
            location: 'San Francisco, CA',
            image: author3
        }
    ]
  return (
    <section className="flex flex-col gap-10 px-8 md:px-12 lg:px-16 pt-8">
        <h5 className='font-main text-2xl self-center'>
            {props.header}
        </h5>
        <div className='flex gap-4 justify-between flex-col tablet:flex-row'>
            {
                reviews.map((item, index) => (
                    <div key={`${item.author}-${index}`} className='flex flex-col w-[100%] tablet:w-[350px] rounded-xl gap-4 p-6 bg-gray-100 hover:shadow-xl justify-between'>
                        <h5 className='text-xl self-center font-semibold text-[#AD343E]'>
                            {item.title}
                        </h5>
                        <p className='text-sm font-extralight tracking-wide leading-6'>
                            {item.text}
                        </p>
                        <div className='flex gap-4 py-4 border-t border-gray-200 items-center'>
                            <img src={item.image} alt={item.title} />
                            <div className='flex flex-col gap-3 justify-between'>
                                <p className='font-semibold text-sm'>
                                    {item.author}
                                </p>
                                <p className='font-extralight text-sm'>
                                    {item.location}
                                </p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Reviews