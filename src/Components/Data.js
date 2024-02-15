import Tour1 from '../images/featured-img-1.jpeg';
import Tour2 from '../images/featured-img-2.jpeg';
import Tour3 from '../images/featured-img-3.jpeg';
import Tour4 from '../images/featured-img-4.jpeg';


// Gallery images 

import gallery1 from '../images/gallery-1.jpeg'
import gallery2 from '../images/gallery-2.jpeg'
import gallery3 from '../images/gallery-3.jpeg'
import gallery4 from '../images/gallery-4.jpeg'
import gallery5 from '../images/gallery-5.jpeg'
import gallery6 from '../images/gallery-6.jpeg'
import gallery7 from '../images/gallery-7.jpeg'
import gallery8 from '../images/gallery-8.jpeg'


export const NavLinks = [
    { id: 1, href: '#home', text: 'home' },
    { id: 2, href: '#about', text: 'about' },
    { id: 3, href: '#services', text: 'services' },
    { id: 4, href: '#featured', text: 'featured' },
    { id: 5, href: '#gallery', text: 'gallery' },
]


export const ServicesItem = [
    {
        id: 1,
        icon: 'fa-solid fa-wallet',
        title: 'saving money',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },

    {
        id: 2,
        icon: 'fa-solid fa-tree',
        title: 'endless hiking',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },

    {
        id: 3,
        icon: 'fa-solid fa-socks',
        title: 'amazing comfort',
        text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.'
    },
]

export const Tours = [
    {
        id: 1,
        img: Tour1,
        date: new Date().toLocaleDateString(),
        title: 'Tibet Adventure',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, qui corporis.',
        cost: 1400,
        location: 'China',
        days: '17 Days'
    },

    {
        id: 2,
        img: Tour2,
        date: new Date('2024', '05', '16').toLocaleDateString(),
        title: 'Best of Bali',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, qui corporis.',
        cost: 2600,
        location: 'Indonesia',
        days: '07 Days'
    },

    {
        id: 3,
        img: Tour3,
        date: new Date('2024', '11', '31').toLocaleDateString(),
        title: 'Explore Hong Kong',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, qui corporis.',
        cost: 2300,
        location: 'Hong Kong',
        days: '24 days'
    },
    {
        id: 4,
        img: Tour4,
        date: new Date('2024', '08', '25').toLocaleDateString(),
        title: 'Kenya Highlights',
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque vitae tempore voluptatum maximereprehenderit eum quod exercitationem fugit, qui corporis.',
        cost: 1400,
        location: 'Kenya',
        days: '24 days'
    }
]

export const GalleryImg = [
    { id: 1, img: gallery1 },
    { id: 2, img: gallery2 },
    { id: 3, img: gallery3 },
    { id: 4, img: gallery4 },
    { id: 5, img: gallery5 },
    { id: 6, img: gallery6 },
    { id: 7, img: gallery7 },
    { id: 8, img: gallery8 },
]