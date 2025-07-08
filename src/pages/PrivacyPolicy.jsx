import React from 'react';

const PrivacyPolicy = () => {
  return (
    <div>
      {/* Header */}
      <div className="bg-gradient-to-br from-[#e0f1df] to-[#90e1e7] p-20">
        <h1 className="text-center text-4xl font-semibold text-gray-600">
          Privacy Policy
        </h1>
      </div>

      {/* Content */}
      <div className="p-8 max-w-5xl mx-auto text-gray-700 leading-7 space-y-6">
        <p><strong>Updated at:</strong> 07-07-2022</p>
        <p>
          ipayment  is committed to protecting your privacy. This Privacy Policy explains how your personal information is collected, used, and disclosed by ipayment.
        </p>
        <p>
          This Privacy Policy applies to our website, and its associated subdomains (collectively, our "Service") alongside our application, ipayment. By accessing or using our Service, you signify that you have read, understood, and agree to our collection, storage, use, and disclosure of your personal information as described in this Privacy Policy and our Terms of Service.
        </p>

        <h2 className="text-2xl font-semibold">Definitions and Key Terms</h2>
        <ul className="list-disc pl-6">
          <li><strong>Cookie:</strong> Small data file stored in your browser used for analytics and preferences.</li>
          <li><strong>Company:</strong> ipayment Private Limited, Chennai, India.</li>
          <li><strong>Customer:</strong> Company or individual using our services.</li>
          <li><strong>Device:</strong> Any internet-enabled hardware like computer, phone, or tablet.</li>
          <li><strong>IP Address:</strong> Number assigned to your device for internet communication.</li>
          <li><strong>Personal Data:</strong> Data that identifies a person directly or indirectly.</li>
          <li><strong>Third-Party Service:</strong> Advertisers, partners, or vendors integrated into our services.</li>
          <li><strong>You:</strong> End-user of our services.</li>
        </ul>

        <h2 className="text-2xl font-semibold">Information We Collect</h2>
        <p>We may collect the following data:</p>
        <ul className="list-disc pl-6">
          <li>Full name</li>
          <li>Phone numbers</li>
          <li>Email addresses</li>
          <li>Company name</li>
          <li>Company website URL</li>
        </ul>

        <h2 className="text-2xl font-semibold">How We Use the Information</h2>
        <ul className="list-disc pl-6">
          <li>Personalizing your experience</li>
          <li>Improving our website and services</li>
          <li>Responding to customer service requests</li>
          <li>Processing transactions</li>
          <li>Sending updates or marketing emails</li>
        </ul>

        <h2 className="text-2xl font-semibold">Sharing Information</h2>
        <p>
          We may share your personal and non-personal data with service providers, advertisers, affiliates, legal authorities (when required), and during business transfers such as mergers or acquisitions.
        </p>

        <h2 className="text-2xl font-semibold">Cookies and Tracking</h2>
        <p>
          We use cookies to enhance functionality and personalize user experience. You can manage cookie settings via your browser. Blocking cookies may disable parts of the website.
        </p>

        <h2 className="text-2xl font-semibold">Email Usage</h2>
        <p>
          By submitting your email, you agree to receive transactional and promotional emails. You can opt-out via unsubscribe links anytime.
        </p>

        <h2 className="text-2xl font-semibold">Data Retention</h2>
        <p>
          We retain data as long as necessary to fulfill the purpose it was collected for and as required by law. When no longer needed, it's securely deleted or anonymized.
        </p>

        <h2 className="text-2xl font-semibold">Data Protection</h2>
        <p>
          We use SSL and encryption to secure sensitive data. However, no system is 100% secure. Use of our services implies your acceptance of this risk.
        </p>

        <h2 className="text-2xl font-semibold">International Transfers</h2>
        <p>
          Your data may be stored or processed outside your country, including in India. By using our service, you consent to this transfer.
        </p>

        <h2 className="text-2xl font-semibold">User Rights</h2>
        <p>
          You may contact us to access, update, correct, or delete your information. Reasonable identity verification may be required.
        </p>

        <h2 className="text-2xl font-semibold">Children's Privacy</h2>
        <p>
          We do not knowingly collect data from children under 13. If we discover such data, we will delete it immediately.
        </p>

        <h2 className="text-2xl font-semibold">Third-Party Services</h2>
        <p>
          We are not responsible for third-party websites linked through our platform. Their privacy policies apply independently.
        </p>

        <h2 className="text-2xl font-semibold">Remarketing</h2>
        <p>
          We use remarketing tools to show ads to previous visitors across the web.
        </p>

        <h2 className="text-2xl font-semibold">Changes to this Policy</h2>
        <p>
          We may update this policy. Continued use of our website means you accept those updates.
        </p>

        <h2 className="text-2xl font-semibold">Governing Law</h2>
        <p>
          This policy is governed by the laws of India. Legal matters will be handled under Indian jurisdiction.
        </p>

        <h2 className="text-2xl font-semibold">Contact Us</h2>
        <p>
          If you have any questions, visit: <a className="text-blue-600 underline" href="https://www.ipayment.in/contactus" target="_blank" rel="noopener noreferrer">https://www.ipayment.in/contactus</a>
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
