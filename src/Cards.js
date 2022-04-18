
const Cards = ({name,email,id}) => {
    return(
        <div className="bg-light-green dib tc br3 pd3 ma2 grow  bw2 shadow-5">
            <img alt="ROBOT" src= {`https://robohash.org/${id}?200x200 `} />
            <div>
                <h2>{name}</h2>
                <p>{email}</p>
            </div>
        </div>
    );
}
export default Cards;