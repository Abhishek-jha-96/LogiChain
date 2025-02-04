import Link from 'next/link'
import { Container } from '../atoms/container'

export interface IFooterProps {}

export const Footer = () => (
  <footer className="py-8 mt-8 text-white text-xs bg-gray-950">
    <Container className="justify-between sm:flex">
      <Link
        target="_blank"
        href="https://github.com/Abhishek-jha-96"
        rel="noreferrer"
      >
        <div className="font-black py-0.5">Abhishek Kumar Jha</div>
        <div>Portfolio project.</div>
        2024
      </Link>
      <div className="grid grid-cols-3 gap-x-4 gap-y-2">
        <div>Furnio</div>
        <div>Musica</div>
        <div>CarHub</div>
        <div>Job App</div>
        <div>Summarizer App</div>
      </div>
    </Container>
  </footer>
)
