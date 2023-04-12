import { companyLogo, iconClockBlue, iconPhoneBlue, iconMailBlue } from '../assets'

export default function Header() {
    return (
        <header className='bg-primary py-8 flex justify-around items-center gap-8'>
            <img src={companyLogo} className='max-h-[36px] max-w-[210px]' />
            <div className='md:flex gap-12 hidden'>
                <div className='flex items-center gap-2'>
                    <img src={iconClockBlue} className='object-contain h-9 w-9' />
                    <div>
                        <p className='text-white text-[11px] whitespace-nowrap'>Mon - Sat 9.00 - 18.00 <br /> Sunday Closed</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={iconMailBlue} className='object-contain h-9 w-9' />
                    <div>
                        <p className='text-white text-[11px] whitespace-nowrap'>Email<br />contact@logistics.com</p>
                    </div>
                </div>
                <div className='flex items-center gap-2'>
                    <img src={iconPhoneBlue} className='object-contain h-9 w-9' />
                    <div>
                        <p className='text-white text-[11px] whitespace-nowrap'>Call Us <br />(00) 112 365 489</p>
                    </div>
                </div>
            </div>
        </header>
    )
}