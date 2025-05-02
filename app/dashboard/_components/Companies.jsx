
const Companies = () => {
    return (
      <div className="py-8 bg-white">
        <div className="container px-4 mx-auto">
          <div className="text-center">
            <p className="text-gray-600 font-medium mb-6">TRUSTED BY TOP COMPANIES WORLDWIDE</p>
          </div>
          <div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-6">
            {/* Company Logos - Replace with actual logos */}
            {Array.from({ length: 6 }).map((_, i) => (
              <div key={i} className="h-8 w-32 bg-gray-200 rounded opacity-60"></div>
            ))}
          </div>
        </div>
      </div>
    );
  };
  
  export default Companies;