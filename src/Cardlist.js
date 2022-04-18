import Cards from "./Cards";
const Cardlist = ({robots}) =>{
    return(
        <div>
        {
            robots.map((value,i) => {
                return (
                <Cards key={i} id= {robots[i].id} name = {robots[i].name} email = {robots[i].email}/>
                );
            })
}
        </div>
    );
}
export default Cardlist;