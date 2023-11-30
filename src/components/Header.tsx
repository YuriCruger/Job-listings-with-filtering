import ImageHeaderMobile from '../../public/images/bg-header-mobile.svg'
import ImageHeaderDesktop from '../../public/images/bg-header-desktop.svg'


export default function Header() {
  return (
      <header className='bg-desaturated_dark_cyan'>
        <img src={ImageHeaderMobile} className='w-full lg:hidden' />
        <img src={ImageHeaderDesktop} className='w-full max-lg:hidden' />
      </header>
  )
}
