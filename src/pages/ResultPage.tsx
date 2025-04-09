import React from 'react';
import { CheckCircle, AlertTriangle, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

function ResultPage() {
  // Simulated result - in real app, this would come from API
  const result = {
    status: 'warning', // 'normal' or 'warning'
    confidence: 85,
    findings: [
      'Irregular tissue density detected in segment A',
      'Possible abnormal growth pattern identified',
      'Contrast enhancement observed in specific regions'
    ],
    recommendations: [
      'Consult with a healthcare provider for detailed evaluation',
      'Consider follow-up imaging in 3-6 months',
      'Review family history and risk factors'
    ]
  };

  return (
    <div className="max-w-3xl mx-auto space-y-8">
      <div className="flex items-center space-x-4">
        <Link
          to="/upload"
          className="flex items-center space-x-2 text-blue-600 hover:text-blue-700"
        >
          <ArrowLeft className="h-5 w-5" />
          <span>Back to Upload</span>
        </Link>
      </div>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <div className={`p-6 ${
          result.status === 'normal' ? 'bg-green-50' : 'bg-yellow-50'
        }`}>
          <div className="flex items-center space-x-3">
            {result.status === 'normal' ? (
              <CheckCircle className="h-8 w-8 text-green-600" />
            ) : (
              <AlertTriangle className="h-8 w-8 text-yellow-600" />
            )}
            <div>
              <h2 className="text-2xl font-bold text-gray-900">
                {result.status === 'normal' ? 'Normal Scan Results' : 'Potential Abnormalities Detected'}
              </h2>
              <p className="text-gray-600">
                Analysis Confidence: {result.confidence}%
              </p>
            </div>
          </div>
        </div>

        <div className="p-6 space-y-6">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Findings</h3>
            <ul className="space-y-2">
              {result.findings.map((finding, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                  <span className="text-gray-700">{finding}</span>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommendations</h3>
            <ul className="space-y-2">
              {result.recommendations.map((recommendation, index) => (
                <li key={index} className="flex items-start space-x-2">
                  <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-blue-600 mt-2" />
                  <span className="text-gray-700">{recommendation}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-gray-50 rounded-lg p-4">
            <p className="text-sm text-gray-600">
              <strong>Important Note:</strong> This analysis is provided as a screening tool and should not
              be considered a final diagnosis. Please consult with a qualified healthcare provider for
              proper medical evaluation and diagnosis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ResultPage;