import './Header.css';

export default () => {
    return ( 
        <div>
            <div className='header-design-con'>
                <div className='horizon-con'>
                    <div className='sky-con fd'>
                        <div className='clouds-con fd'>
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className='sun-con' />
                    </div>
                    <div className='sea-con fd'>
                        <div className='reflection-con'>
                            <div className='reflection-inside fd' >
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                            <div className='reflection-inside fd'>
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                    </div>
                </div>
                <div className='train-con'>
                    <div className='interior-brace-con'>
                        <div className='interior-upper-con'>
                            <div className='handle-bar-con fd'>
                                <span />
                                <span />
                                <span />
                                <span />
                            </div>
                        </div>
                        <div className='windows-brace-con fd'>
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className='interior-lower-con'>
                            <div className='couch-con'>
                                <div className='upper-couch' />
                                <div className='lower-couch' />
                                <div className='foot-couch fd'>
                                    <span />
                                    <span />
                                    <span />
                                    <span />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <header>
                <div className='train-bottom-con'>
                    <div className='train-frame-con' />
                    <div className='train-under-con'>
                        <div className='wheel-con fd'>
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                </div>
                <div className='header-title-con fd'>
                    <h1>
                        <span> Aldrian Telan </span>
                    </h1>
                    <p>
                        Web Developer
                    </p>
                </div>
            </header>
        </div>
    )
}