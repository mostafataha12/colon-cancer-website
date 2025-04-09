import React from 'react';
import { Brain, Upload, FileCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

function HomePage() {
  return (
    <div className="space-y-12">
      {/* Hero Section */}
      <div className="text-center space-y-6">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">
          Advanced Colon Cancer Detection Using AI
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Upload your MRI scans and get instant analysis powered by cutting-edge artificial intelligence.
          Early detection saves lives.
        </p>
        <Link
          to="/upload"
          className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors"
        >
          Start Analysis
        </Link>
      </div>

      {/* Features Section */}
      <div className="grid md:grid-cols-3 gap-8 mt-12">
        <FeatureCard
          icon={<Upload className="h-8 w-8 text-blue-600" />}
          title="Easy Upload"
          description="Securely upload your MRI scans in common formats including DICOM, JPG, and PNG."
        />
        <FeatureCard
          icon={<Brain className="h-8 w-8 text-blue-600" />}
          title="AI Analysis"
          description="Our advanced AI model analyzes your scans with high accuracy and precision."
        />
        <FeatureCard
          icon={<FileCheck className="h-8 w-8 text-blue-600" />}
          title="Quick Results"
          description="Receive detailed analysis results within minutes, not days."
        />
      </div>

      {/* Info Section */}
      <div className="bg-white rounded-lg shadow-lg p-8 mt-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">
          Why Early Detection Matters
        </h2>
        <p className="text-gray-600">
          Colon cancer is one of the most preventable and treatable forms of cancer when detected early.
          Our AI-powered analysis helps healthcare providers identify potential signs of colon cancer
          in MRI scans, enabling faster diagnosis and better treatment outcomes.
        </p>
      </div>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg">
      <div className="flex flex-col items-center text-center">
        <div className="mb-4">{icon}</div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  );
}

export default HomePage;