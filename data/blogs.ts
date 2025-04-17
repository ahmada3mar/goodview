export interface Blog {
  id: number;
  title: string;
  excerpt: string;
  content: string;
  image: string;
  author: string;
  date: string;
  category: string;
  featured: boolean;
  shortDescription: string;
  cover: string;
  heading:string;
}

export const blogs: Blog[] = 
[
  {
    id: 1,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title: "The Future of Web Development",
    excerpt: "Exploring the latest trends and technologies in web development",
    content: `                        <h2 class="text-3xl md:text-4xl   font-extrabold font-jakarta text-stone-300">
                            What We
                            Do</h2>
                        <p class="text-lg md:text-xl font-rubik  text-stone-300 ">
                            We know every move is different, so we offer professional moving services designed to meet
                            your needs.
                        </p>
                        <p class="text-lg md:text-xl font-rubik  text-stone-300 ">Our services include:</p>
                        <ul
                            class="list-inside md:text-[18px] text-white md:font-[300] md:leading-8 font-rubik mt-0 space-y-2">
                            <li>✔ &nbsp;<span class="font-semibold">Local & Long-Distance Moving: </span>Whether you're
                                moving down the street or across the country, we handle it all.</li>
                            <li>✔ &nbsp;<span class="font-semibold">Packing and Unpacking: </span>Don't lift a
                                finger—we'll handle everything from fragile items to bulky furniture.</li>
                            <li>✔ &nbsp;<span class="font-semibold">Moving and Storage: </span>Need extra space? Our
                                secure storage solutions keep your belongings safe.</li>
                            <li>✔ &nbsp;<span class="font-semibold">Commercial Moving: </span>Relocating your business?
                                We minimize downtime and maximize efficiency.</li>

                        </ul>`,
    image: "https://picsum.photos/800/400?random=1",
    shortDescription: "Moving isn't just about transporting boxes—it's about new beginnings, and at Good View Moving & Storage, we know just how important that is.",
    author: "John Doe",
    date: "2024-04-15",
    category: "Technology",
    featured: true,
    cover: "https://picsum.photos/800/400?random=10"
  },
  {
    id: 2,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title: "Getting Started with Nuxt 3",
    excerpt: "A comprehensive guide to building applications with Nuxt 3",
    content: "lorem ipsum dolor sit amet, consectetur adipiscing elit.. lorem ipsum dolor sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit..  sit amet, consectetur adipiscing elit.. .",
    image: "https://picsum.photos/800/400?random=2",
    author: "Jane Smith",
    date: "2024-04-14",
    category: "Development",
    featured: true,
    cover: "https://picsum.photos/800/400?random=11",
    shortDescription: "Moving isn't just about transporting boxes—it's about new beginnings, and at Good View Moving & Storage, we know just how important that is.",
  },
  {
    id: 22,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title: "Getting Started with Nuxt 3",
    excerpt: "A comprehensive guide to building applications with Nuxt 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "https://picsum.photos/800/400?random=2",
    author: "Jane Smith",
    date: "2024-04-14",
    category: "Development",
    featured: true,
    cover: "https://picsum.photos/800/400?random=12",
    shortDescription: "Moving isn't just about transporting boxes—it's about new beginnings, and at Good View Moving & Storage, we know just how important that is.",
  },
  {
    id: 23,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title: "Getting Started with Nuxt 3",
    excerpt: "A comprehensive guide to building applications with Nuxt 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "https://picsum.photos/800/400?random=2",
    author: "Jane Smith",
    date: "2024-04-14",
    category: "Development",
    featured: true,
    shortDescription: "Moving isn't just about transporting boxes—it's about new beginnings, and at Good View Moving & Storage, we know just how important that is.",
    cover: "https://picsum.photos/800/400?random=13",
  },
  {
    id: 237,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title: "Getting Started with Nuxt 3",
    excerpt: "A comprehensive guide to building applications with Nuxt 3",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "https://picsum.photos/800/400?random=2",
    author: "Jane Smith",
    date: "2024-04-14",
    category: "Development",
    featured: true,
    shortDescription: "Moving isn't just about transporting boxes—it's about new beginnings, and at Good View Moving & Storage, we know just how important that is.",
    cover: "https://picsum.photos/800/400?random=14",
  },
  {
    id: 3,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title: "Best Practices for UI Design",
    excerpt: "Learn how to create beautiful and functional user interfaces",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "https://picsum.photos/800/400?random=3",
    author: "Mike Johnson",
    date: "2024-04-13",
    category: "Design",
    featured: false,
    shortDescription: "Moving isn't just about transporting boxes—it's about new beginnings, and at Good View Moving & Storage, we know just how important that is.",
    cover: "https://picsum.photos/800/400?random=15",
  },
  {
    id: 4,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title: "Optimizing Website Performance",
    excerpt: "Tips and tricks to make your website load faster",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "https://picsum.photos/800/400?random=4",
    author: "Sarah Williams",
    date: "2024-04-12",
    category: "Performance",
    featured: false,
    shortDescription: "Moving isn't just about transporting boxes—it's about new beginnings, and at Good View Moving & Storage, we know just how important that is.",
    cover: "https://picsum.photos/800/400?random=16",
  },
  {
    id: 5,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title: "The Power of TypeScript",
    excerpt: "Why TypeScript is becoming the standard for web development",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "https://picsum.photos/800/400?random=5",
    author: "David Brown",
    date: "2024-04-11",
    category: "Development",
    featured: false,
    shortDescription: "Moving isn't just about transporting boxes—it's about new beginnings, and at Good View Moving & Storage, we know just how important that is.",
    cover: "https://picsum.photos/800/400?random=17",
  },
  {
    id: 6,
    heading: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.",
    title: "Responsive Design Principles",
    excerpt: "Creating websites that work on all devices",
    content: "Lorem ipsum dolor sit amet, consectetur adipiscing elit...",
    image: "https://picsum.photos/800/400?random=6",
    author: "Emily Davis",
    date: "2024-04-10",
    category: "Design",
    featured: false,
    shortDescription: "Moving isn't just about transporting boxes—it's about new beginnings, and at Good View Moving & Storage, we know just how important that is.",
    cover: "https://picsum.photos/800/400?random=18",
  }
]; 