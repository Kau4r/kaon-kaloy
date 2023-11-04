import { v4 as uuidv4 } from 'uuid'

function LandingNavBar({ attr, pos = 'Start' }) {
  const posArr = {
    Start: 'justify-center md:justify-start ',
    End: 'justify-center md:justify-end',
    Center: 'justify-center',
    Evenly: 'justify-center md:space-evenly',
  }

  for (const a of attr) {
    a.key = uuidv4()
  }

  return (
    <nav className={`fixed top-0 flex w-full space-x-4 px-5 py-2 ${posArr[pos]}`}>
      {attr.map(({ key, title, url }) => (
        <a
          key={key}
          href={url}
          className="sm:text-md rounded-lg px-3 py-2 text-sm font-bold text-slate-700 hover:bg-slate-100 hover:text-slate-900 md:text-lg lg:text-xl xl:text-2xl 2xl:text-3xl"
        >
          {title}
        </a>
      ))}
    </nav>
  )
}

export default LandingNavBar
