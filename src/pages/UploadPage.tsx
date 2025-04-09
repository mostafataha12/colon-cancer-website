import React from 'react';
import { Upload, AlertCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

function UploadPage() {
  const [dragActive, setDragActive] = React.useState(false);
  const [file, setFile] = React.useState<File | null>(null);
  const [loading, setLoading] = React.useState(false);
  const navigate = useNavigate();
  const inputRef = React.useRef<HTMLInputElement>(null);

  const handleDrag = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);
    
    if (e.dataTransfer.files && e.dataTransfer.files[0]) {
      handleFile(e.dataTransfer.files[0]);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.target.files && e.target.files[0]) {
      handleFile(e.target.files[0]);
    }
  };

  const handleFile = (file: File) => {
    setFile(file);
  };

  const onButtonClick = () => {
    inputRef.current?.click();
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!file) return;

    setLoading(true);
    // Simulate API call
    setTimeout(() => {
      setLoading(false);
      navigate('/result');
    }, 2000);
  };

  return (
    <div className="max-w-2xl mx-auto space-y-8">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">Upload MRI Scan</h1>
        <p className="mt-2 text-gray-600">
          Upload your MRI scan for AI-powered analysis
        </p>
      </div>

      <form
        onSubmit={handleSubmit}
        onDragEnter={handleDrag}
        className="space-y-6"
      >
        <div
          className={`relative border-2 border-dashed rounded-lg p-8 text-center ${
            dragActive ? "border-blue-600 bg-blue-50" : "border-gray-300"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <input
            ref={inputRef}
            type="file"
            className="hidden"
            accept="image/*"
            onChange={handleChange}
          />

          <div className="space-y-4">
            <Upload className="h-12 w-12 mx-auto text-gray-400" />
            <div className="space-y-2">
              <p className="text-gray-700">
                Drag and drop your MRI scan here, or{" "}
                <button
                  type="button"
                  onClick={onButtonClick}
                  className="text-blue-600 hover:text-blue-700 font-medium"
                >
                  browse
                </button>
              </p>
              <p className="text-sm text-gray-500">
                Supported formats: DICOM, JPG, PNG
              </p>
            </div>
          </div>
        </div>

        {file && (
          <div className="bg-blue-50 rounded-lg p-4">
            <p className="text-sm text-blue-700">
              Selected file: {file.name}
            </p>
          </div>
        )}

        <div className="bg-yellow-50 rounded-lg p-4 flex items-start space-x-3">
          <AlertCircle className="h-5 w-5 text-yellow-600 flex-shrink-0 mt-0.5" />
          <p className="text-sm text-yellow-700">
            Please ensure that the MRI scan is clear and in the correct format.
            Blurry or incorrect images may affect the analysis accuracy.
          </p>
        </div>

        <button
          type="submit"
          disabled={!file || loading}
          className={`w-full py-3 px-4 rounded-lg font-medium text-white
            ${
              !file || loading
                ? "bg-gray-400 cursor-not-allowed"
                : "bg-blue-600 hover:bg-blue-700"
            }`}
        >
          {loading ? "Analyzing..." : "Start Analysis"}
        </button>
      </form>
    </div>
  );
}

export default UploadPage;