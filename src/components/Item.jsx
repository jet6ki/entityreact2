const Item = ({ item ,onDelete}) => {
    return(
        <div className="flex-justify-between items-center p-2 border-b">
            <span>{item.name}</span>
            <div>
                <button className="bg-blue-500 text-white px-3 py-1 rounded mr-2">Edit</button>
                <button className="bg-red-500 tezt-white px-3 py-1 rounded" onClick={()=> onDelete(item.id)}>
                    Delete
                </button>
            </div>
        </div>
    )


    // Render a single item
    // Add a Delete and Edit button
   
};

export default Item;
