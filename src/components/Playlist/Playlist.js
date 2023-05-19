import './playlist.css'

const Playlist = () => {
    return (
        <section>
            <div className='playlist'>
                <h1>Make your party fun!</h1>

                Create your own custom playlist today.

                <button>Create playlist</button>
            </div>

            <div className='trending'>
                <div className='trending__container'>
                    <h3>Trending Songs</h3>

                    <div className='songs__buttons'>
                        <button>Unavailable by <em>Davido</em><span> + </span></button>
                        <button>Unavailable by <em>Davido</em><span> + </span></button>
                        <button>Unavailable by <em>Davido</em><span> + </span></button>
                        <button>Unavailable by <em>Davido</em><span> + </span></button>
                        <button>Unavailable by <em>Davido</em><span> + </span></button>
                    </div>
                    <button>View more</button>
                </div>
            </div>
        </section>
    )
}

export default Playlist