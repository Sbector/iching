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
        <header className="m-4">
          <nav class="flex items-center justify-between flex-wrap bg-gray-200 p-6 rounded-lg">
            <ul className="flex">
              {links.map(({ label, route }) => (
                <li key={route} className="mr-6">
                  <Link href={route} className="text-gray-500 hover:text-gray-900">{label}</Link>
                </li>
              ))}
            </ul>
          </nav>
        </header>
    )
}