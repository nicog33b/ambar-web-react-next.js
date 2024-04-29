// components/Pagination.jsx

const Pagination = ({ itemsPerPage, totalItems, paginate, currentPage }) => {
    const pageNumbers = [];
  
    for (let i = 1; i <= Math.ceil(totalItems / itemsPerPage); i++) {
      pageNumbers.push(i);
    }
  
    return (
      <nav className="flex justify-center py-6 px-3">
        <ul className="inline-flex -space-x-px">
          {pageNumbers.map(number => (
            <li key={number}>
              <a
                onClick={() => paginate(number)}
                className={`py-2 px-3 leading-tight ${currentPage === number ? 'bg-gray-300' : 'bg-white'} border border-gray-300 text-gray-500 hover:bg-gray-300`}
              >
                {number}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    );
  };
  
  export default Pagination;
  