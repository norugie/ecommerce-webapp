function Form ({setSearch}) {
    return (
        <form className='search-form'>
            <input type='text' 
                id='product-search' 
                className='search-text' 
                autoComplete='off' 
                placeholder='Search for a product'
                onChange={(e) => setSearch(e.target.value)} 
            />
        </form>
    );
}

export default Form;