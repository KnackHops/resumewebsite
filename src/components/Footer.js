import './Footer.css'

export default () => {
    return (
        <div>
            <div className='footer-design-con'>
                <div className='sandy-skull-con'>
                    <span className='eyes' />
                    <span className='teeth' />
                </div>
                <div className='spongebob'>
                    <span />
                    <span />
                    <span />
                    <span />
                    <span />
                </div>
                <div className='footer-underground-con'>
                    <div className='rock' />
                    <div className='starfish-con'>
                        <span />
                        <span />
                        <span />
                        <span />
                        <span />
                    </div>
                    <div className='crab-con'>
                        <div className='eyes' />
                        <div className='eyes' />
                        <div className='body'>
                            <span className='limbs right' />
                            <span className='limbs right' />
                            <span className='limbs right' />
                            <span className='limbs right' />
                            <span className='limbs left' />
                            <span className='limbs left' />
                            <span className='limbs left' />
                            <span className='limbs left' />    
                        </div>
                        <div className='crab-pincer-right' />
                        <div className='crab-pincer-left' />
                    </div>
                </div>
            </div>
            <footer className='un-pad'>
                <div className='contact-con'>
                    <ul className='contact-list fd'>
                        <li>
                            <a title='github' target="_blank" href='https://github.com/KnackHops'>
                                <i class="fa-brands fa-github" />
                            </a>
                        </li>
                        <li>
                            <a title='linkedin' target="_blank" href='https://www.linkedin.com/in/aldrian-telan-5003b6216/'>
                                <i class="fa-brands fa-linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}