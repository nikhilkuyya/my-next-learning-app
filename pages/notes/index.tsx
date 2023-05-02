import type { NextPage } from 'next'
import Link from 'next/link';

const Notes: NextPage = () => {

  return <div>
          <Link href='/notes/[id]' as={`/notes/1`} >
            <a>Notes</a>
          </Link> 
          I am Notes page</div>
}

export default Notes