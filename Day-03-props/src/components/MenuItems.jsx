function MenuItem({itemName,price,category}){
    return(
        <div>
            <h2>{itemName}</h2>
            <p>Price : {price}</p>
            <p>Category: {category}</p>
        </div>
    );

}
export default MenuItem;