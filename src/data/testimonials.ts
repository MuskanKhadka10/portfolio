export interface TestimonialType {
  name: string;
  position: string;
  text: string;
  avatar: string;
}

export const testimonials: TestimonialType[] = [
  {
    name: 'Sarah Johnson',
    position: 'CEO, TechStart Inc.',
    text: 'Working with this developer was a game-changer for our company. They delivered our project on time and exceeded our expectations with their attention to detail and innovative solutions.',
    avatar: 'https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Michael Rodriguez',
    position: 'Project Manager, WebSolutions',
    text: 'I\'ve worked with many developers, but few have the combination of technical skill and communication abilities that this developer brings to the table. They\'re a true professional who delivers quality work consistently.',
    avatar: 'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  },
  {
    name: 'Emily Chen',
    position: 'Marketing Director, GrowthBrand',
    text: 'Our website redesign was a complex project with many moving parts, but this developer handled it with ease. The end result was beautiful, functional, and exactly what we needed to take our business to the next level.',
    avatar: 'https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2'
  }
];