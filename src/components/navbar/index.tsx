const Navbar = () => {
    return (
        <>
            <div className="row">
                <div className="col-12 pt-3 pb-2">
                    <div className="d-flex flex-row justify-content-between">
                        <div className="flex">
                            <h4>Welcome, Misa Choice</h4>
                        </div>

                        <div className="flex d-flex justify-content-start">
                            <p><small>Misa Choice</small></p>
                            <div className="dropdown"></div>
                        </div>
                    </div>
                </div>
                <hr />
            </div>
        </>
    )
}

export default Navbar;