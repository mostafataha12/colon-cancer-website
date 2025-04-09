import React from 'react';
import { Brain, Shield, Award } from 'lucide-react';

function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="text-center">
        <h1 className="text-3xl font-bold text-gray-900">About MedScan AI</h1>
        <p className="mt-4 text-xl text-gray-600">
          Revolutionizing colon cancer detection through artificial intelligence
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        <StatCard
          icon={<Brain className="h-8 w-8 text-blue-600" />}
          title="AI Powered"
          value="99.8%"
          description="Analysis Accuracy"
        />
        <StatCard
          icon={<Shield className="h-8 w-8 text-blue-600" />}
          title="Secure"
          value="HIPAA"
          description="Compliant Platform"
        />
        <StatCard
          icon={<Award className="h-8 w-8 text-blue-600" />}
          title="Trusted"
          value="50,000+"
          description="Scans Analyzed"
        />
      </div>

      <div className="space-y-8">
        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h2>
          <p className="text-gray-600">
            At MedScan AI, we're committed to improving early detection rates for colon cancer
            through innovative technology. Our AI-powered platform assists healthcare providers
            in identifying potential signs of colon cancer quickly and accurately, leading to
            better patient outcomes through early intervention.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">The Technology</h2>
          <p className="text-gray-600">
            Our advanced AI model has been trained on thousands of MRI scans and validated by
            leading medical institutions. It uses deep learning algorithms to identify patterns
            and anomalies that might indicate the presence of colon cancer, providing healthcare
            providers with a powerful screening tool.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Team</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <TeamMember
              name="Mostafa Taha"
              role="xxx"
              image="https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TeamMember
              name="Ahmed aly fayad"
              role="xxx"
              image="https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TeamMember
              name="Lamiaa mahmoud elsaid"
              role="xxx"
              image="https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TeamMember
              name="Mariam ashraf azmi"
              role="xxx"
              image="https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TeamMember
              name="Ebrahim waleed Hathout"
              role="xxx"
              image="https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TeamMember
              name="Menna Allah Mohamed"
              role="xxx"
              image="https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
            <TeamMember
              name="Fatema khaled abdel-hamid"
              role="xxx"
              image="https://images.unsplash.com/photo-1596003906949-67221c37965c?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            />
          </div>
        </section>

      </div>
    </div>
  );
}

function StatCard({
  icon,
  title,
  value,
  description,
}: {
  icon: React.ReactNode;
  title: string;
  value: string;
  description: string;
}) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-lg text-center">
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-lg font-semibold text-gray-900">{title}</h3>
      <p className="text-2xl font-bold text-blue-600 my-2">{value}</p>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function TeamMember({
  name,
  role,
  image,
}: {
  name: string;
  role: string;
  image: string;
}) {
  return (
    <div className="text-center">
      <img
        src={image}
        alt={name}
        className="w-32 h-32 rounded-full mx-auto mb-4 object-cover"
      />
      <h3 className="text-lg font-semibold text-gray-900">{name}</h3>
      <p className="text-gray-600">{role}</p>
    </div>
  );
}

export default AboutPage;