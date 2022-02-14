import './Footer.css'

export default () => {
    return (
        <div className='un-pad'>
            <footer>
                <div className='contact-con'>
                    <ul className='contact-list'>
                        <li>
                            <a title='github' target="_blank" href='https://github.com/KnackHops'>
                                <i class="fa-brands fa-github" />
                            </a>
                        </li>
                        <li>
                            <a title='linkedin' target="_blank" href='linkedin.com/in/aldrian-telan-5003b6216'>
                                <i class="fa-brands fa-linkedin" />
                            </a>
                        </li>
                    </ul>
                </div>
            </footer>
        </div>
    )
}