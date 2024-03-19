function SearchHeader({search}) {
    const handleFormSubmit=(event)=>{  {/*ekrana girilen degerin ekranda gozukmesi için (hemen gitmemesi için)even.preventDefault ile default olan deger degistirlir ve kerandan gitmez*/}
        event.preventDefault();
        debugger;
        search('can');
    };
    return (
        <div className="searchDiv">
            <form onSubmit={handleFormSubmit}> {/*onSubmit: Form submit olduğu anda ne yapacağını söyleyeceğimiz event'tir*/}
                <label>Ne arıyorsunuz?</label>
                <input />
            </form> 
        </div>
    );
}

export default SearchHeader;

