import React from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

function ContactPage() {
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    
    // Simulate API call
    setTimeout(() => {
      setStatus('success');
      // Reset form
      const form = e.target as HTMLFormElement;
      form.reset();
    }, 1000);
  };

  return (
    <div className="max-w-4xl mx-auto">
      <div className="text-center mb-12">
        <h1 className="text-3xl font-bold text-gray-900">Contact Us</h1>
        <p className="mt-4 text-xl text-gray-600">
          Have questions? We're here to help.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div className="space-y-8">
          <div>
            <h2 className="text-xl font-semibold text-gray-900 mb-4">Get in Touch</h2>
            <p className="text-gray-600 mb-6">
              Our team is available Monday through Friday, 9am to 5pm EST.
              We typically respond within 24 hours.
            </p>
          </div>

          <div className="space-y-4">
            <ContactInfo
              icon={<Mail className="h-5 w-5 text-blue-600" />}
              title="Email"
              content="support@medscanai.com"
            />
            <ContactInfo
              icon={<Phone className="h-5 w-5 text-blue-600" />}
              title="Phone"
              content="+1 (555) 123-4567"
            />
            <ContactInfo
              icon={<MapPin className="h-5 w-5 text-blue-600" />}
              title="Address"
              content="123 Medical Center Drive, Suite 100, Boston, MA 02115"
            />
          </div>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                Name
              </label>
              <input
                type="text"
                id="name"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                Email
              </label>
              <input
                type="email"
                id="email"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                Subject
              </label>
              <input
                type="text"
                id="subject"
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                Message
              </label>
              <textarea
                id="message"
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              ></textarea>
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className={`w-full flex items-center justify-center space-x-2 py-2 px-4 rounded-lg text-white font-medium
                ${status === 'loading' ? 'bg-gray-400' : 'bg-blue-600 hover:bg-blue-700'}`}
            >
              <Send className="h-5 w-5" />
              <span>{status === 'loading' ? 'Sending...' : 'Send Message'}</span>
            </button>

            {status === 'success' && (
              <div className="bg-green-50 text-green-700 p-4 rounded-lg">
                Thank you for your message. We'll get back to you soon!
              </div>
            )}

            {status === 'error' && (
              <div className="bg-red-50 text-red-700 p-4 rounded-lg">
                An error occurred. Please try again later.
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}

function ContactInfo({
  icon,
  title,
  content,
}: {
  icon: React.ReactNode;
  title: string;
  content: string;
}) {
  return (
    <div className="flex items-start space-x-3">
      <div className="flex-shrink-0">{icon}</div>
      <div>
        <h3 className="font-medium text-gray-900">{title}</h3>
        <p className="text-gray-600">{content}</p>
      </div>
    </div>
  );
}

export default ContactPage;