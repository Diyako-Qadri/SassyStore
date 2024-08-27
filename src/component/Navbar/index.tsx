"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
const Navbar = () => {
    const path = usePathname();
  return (
    <nav className='Nav'>
    
      <Link className={`Nav--item ${path === "/men" ? "active" : ""}`} href="/men">Men</Link>
      <Link className={`Nav--item ${path === "/women" ? "active" : ""}`} href="/women">Women</Link>
      <Link className={`Nav--item ${path === "/jewelery" ? "active" : ""}`} href="/jewelery">Jewelery</Link>
      <Link className={`Nav--item ${path === "/electronics" ? "active" : ""}`} href="/electronics">Electronics</Link>
    </nav>
  );
};

export default Navbar;
