export interface Product {
    id: number;
    name: string;
    price: number;
    description: string;
    image: string;
    longDescription: string
}

const products: Product[] = [
    {
        id: 1,
        name: 'Wheel Spinner',
        price: 5.99,
        description: 'A wheel spinner is a toy that spins',
        image: "http://localhost:8080/fidget-1.jpg",
        longDescription: "Our Wheel Spinner is fun, functional, and maybe just amazing"
    },
    {
        id: 2,
        name: 'Twist Fidget',
        price: 8.49,
        description: 'The Twist Fidget provides a satisfying twist and turn experience',
        image: "http://localhost:8080/fidget-2.jpg",
        longDescription: "Twist your stress away with our innovative Twist Fidget design"
    },
    {
        id: 3,
        name: 'Gyro Gizmo',
        price: 12.99,
        description: 'The Gyro Gizmo spins with precision and style',
        image: "http://localhost:8080/fidget-3.jpg",
        longDescription: "Experience the magic of gyroscopic motion with our Gyro Gizmo"
    },
    {
        id: 4,
        name: 'Dizzy Whirl',
        price: 6.99,
        description: 'The Dizzy Whirl offers a whirlwind of spinning delight',
        image: "http://localhost:8080/fidget-4.jpg",
        longDescription: "Get ready for a dizzying adventure with our Dizzy Whirl spinner"
    },
    {
        id: 5,
        name: 'Swift Spinner',
        price: 10.99,
        description: 'The Swift Spinner is designed for swift and smooth spins',
        image: "http://localhost:8080/fidget-5.jpg",
        longDescription: "Spin effortlessly with the Swift Spinner – the epitome of spin perfection"
    },
    {
        id: 6,
        name: 'Whiz Widget',
        price: 7.99,
        description: 'The Whiz Widget whizzes and wows with every spin',
        image: "http://localhost:8080/fidget-6.jpg",
        longDescription: "Whiz through stress with the Whiz Widget – your ultimate spinning companion"
    },
    {
        id: 7,
        name: 'Spiral Spinner',
        price: 9.99,
        description: 'The Spiral Spinner creates captivating spiral patterns as it spins',
        image: "http://localhost:8080/fidget-7.jpg",
        longDescription: "Watch mesmerizing spirals unfold with our Spiral Spinner – a visual treat"
    },
    {
        id: 8,
        name: 'Zen Swirl',
        price: 14.99,
        description: 'The Zen Swirl promotes relaxation with its calming spin',
        image: "http://localhost:8080/fidget-8.jpg",
        longDescription: "Achieve inner peace with the Zen Swirl – a fusion of tranquility and motion"
    },
    {
        id: 9,
        name: 'Rapid Revolver',
        price: 11.49,
        description: 'The Rapid Revolver spins at an exhilarating pace',
        image: "http://localhost:8080/fidget-9.jpg",
        longDescription: "Experience the thrill of rapid spinning with our cutting-edge Rapid Revolver"
    },
    {
        id: 10,
        name: 'Vortex Vibration',
        price: 16.99,
        description: 'The Vortex Vibration adds a vibrating twist to traditional spinning',
        image: "http://localhost:8080/fidget-10.jpg",
        longDescription: "Feel the soothing vibrations of the Vortex Vibration – a sensory delight in your hands"
    }
]

export default products