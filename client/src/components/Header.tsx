import "tailwindcss";

export default function Header({uploadFile}){

const handleSubmit = (e) => {
   uploadFile(e.target.files[0]);
};

  return (
    <div className="header">
	<input
        type="file"
        className="file:bg-blue-400 file:text-white file:font-medium file:px-5 file:py-2 file:rounded-lg file:shadow-md file:border-0 file:cursor-pointer"
        onChange={handleSubmit}
    />
    </div>
    );
};

