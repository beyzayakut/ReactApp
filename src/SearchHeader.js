import {useState} from "react";

function SearchHeader({search}) {

    const [valueInput,setValue]=useState('')
    const handleFormSubmit=(event)=>{  {/*ekrana girilen degerin ekranda gozukmesi için (hemen gitmemesi için)even.preventDefault ile default olan deger degistirlir ve kerandan gitmez*/}
        event.preventDefault();
        search(valueInput);
    };
    const handleChange=(event)=>{
        setValue(event.target.value);
    };
    return (
        <div className="searchDiv">
            <form onSubmit={handleFormSubmit}> {/*onSubmit: Form submit olduğu anda ne yapacağını söyleyeceğimiz event'tir*/}
                <label>Ne arıyorsunuz?</label>
                <input value={valueInput} onChange={handleChange}/>
            </form> 
        </div>
    );
}

export default SearchHeader;

