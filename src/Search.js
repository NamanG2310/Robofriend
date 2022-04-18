// import react from "react";

const Search = ({searchchange}) =>{
    return (
        <div className="pd2">
        <input className="pd3 ba b--green bg-lightest-blue"
        type='search' 
        placeholder="Search robots"
        onChange={searchchange}
         />
        </div>
    );
}
export default Search;