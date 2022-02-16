import './Header.css';

export default () => {
    return ( 
        <div>
            <div className='header-design-con'>
                <div className='wall-con fd center'>
                    <div className='window-con'>    
                        <div className='window-inside fd center'>
                            <div className='sky-con'>

                            </div>
                            <div className='split-mid'>
                                <div className='horizon-left' />
                                <div className='horizon-right' />
                            </div>
                            <div className='sea-con'>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header className='un-pad'>
                <div className='header-icon-con'>
                    <h1>
                        <span> Aldrian Telan </span>
                    </h1>
                    <p>
                        Web Developer
                    </p>
                </div>
                <div className='header-paragraph-con'>
                    <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                    </p>
                </div>
            </header>
        </div>
    )
}