import "tailwindcss";

interface UploadProps{
	uploadFile: (file:File) => Promise<void>;
}

export default function Header({uploadFile}: UploadProps){

const handleSubmit = (e: React.ChangeEvent<HTMLInputElement>) => {
	const file = e.target.files?.[0];

	if (!file) return;
	
	uploadFile(file);
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

