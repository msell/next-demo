import React from 'react'
import Link from 'next/link'

const Header = () => {
    return (
        <span>
            <Link href="/"><a>Home</a></Link> |
            <Link href="/cats"><a> Cats</a></Link>
            </span>
    );
};

export default Header