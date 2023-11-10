import Link from "next/link"

const links = [{
  label: 'home',
  route: './'
},{
  label: 'about',
  route: './about'
},{
  label: 'instructions',
  route: './instructions'
},{
  label: 'consult',
  route: './consult'
}]

export default function Header () {
    return(
        <header className="m-2">
          <div className="py-4 text-center">
            <a href="./">
              <h1 className="text-gray-200 text-3xl pb-2 m-4">I ching <span className="text-2xl">online</span></h1>
            </a>
          </div>
          <nav className="bg-gray-200 py-1 px-2 rounded-lg max-w-fit mx-auto mb-10">
            <ul className=" flex justify-start flex-wrap">
              {links.map(({ label, route }) => (
                <li key={route} className="mx-4">
                  <Link href={route} className="text-gray-500 hover:text-gray-900">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    )
}