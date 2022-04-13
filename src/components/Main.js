import './Main.css'

export default () => {
    return (
        <div className='main-con'>
            <main>
                <section className='skills-con fd center un-pad'>
                    <h2> What can I do? </h2>
                    <ul className='skills-list fd'>
                        <li> <p> Programming languages such as Python, Javascript, and C# </p> </li>
                        <li> <p> User friendly, and dynamic designs using HTML, and CSS </p> </li>
                        <li> <p> Specializing in ReactJS and it's wonderful hooks for frontend </p></li>
                        <li> <p> And the ever diversed Flask on backend </p> </li>
                        <li> <p> How to properly manage RESTful APIs, send and handle HTTPs requests </p></li>
                        <li> <p> Mysql, Postgresql expertise for database needs </p> </li>
                        <li> <p> Familiarity with github, terminal, and a dip in Ubuntu </p> </li>
                    </ul>
                </section>
                <div className='main-design-underwater'>
                    <div className='submarine'>
                        <div className='top-con'>
                            <div className='pipe' />
                            <div className='pipe' />
                            <div className='scope' />
                        </div>
                        <div className='window-front-con' />
                        <div className='window-con fd'>
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className='bottom-con' />
                        <div className='tail-con'>
                            <div className='pipe' />
                            <div className='pipe' />
                            <div className='mid-turbine' />
                            <div className='turbine-con'>

                            </div>
                        </div>
                        <div className='outline' />
                    </div>
                    <div className='fish fd'>
                        <div className='head' />
                        <div className='body' />
                        <div className='tail' />
                    </div>
                    <div className='fish fd'>
                        <div className='head' />
                        <div className='body' />
                        <div className='tail' />
                    </div>
                    <div className='fish fd'>
                        <div className='head' />
                        <div className='body' />
                        <div className='tail' />
                    </div>
                    <div className='jellyfish big'>
                        <div className='head' />
                        <div className='head-bottom'>
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className='tentacles'>
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div className='jellyfish small'>
                        <div className='head' />
                        <div className='head-bottom'>
                            <span />
                            <span />
                            <span />
                        </div>
                        <div className='tentacles'>
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                            <span />
                        </div>
                    </div>
                    <div className='dolphin fd'>
                        <div className='head'>
                            <span className='muzzle' />    
                        </div>
                        <div className='body' />
                        <div className='fin' />
                        <div className='bottom-fin'>

                        </div>
                        <div className='tail' />
                    </div>
                </div>
                <section className='portfolio-con fd center un-pad'>
                    <h2> My Portfolio </h2>
                    <ul>
                        <li>
                            <p> 
                                <a href='https://zaccs-panciteria.netlify.app/' target="_blank">
                                    <span>Zacc's Panciteria </span>
                                    <img src="https://i1.lensdump.com/i/r5jYz3.gif" />
                                </a>
                                Using ReactJS
                            </p>
                        </li>
                    </ul>
                </section>
            </main>
        </div>
    )
}