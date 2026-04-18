import { Link } from 'react-router-dom';
import SectionHeading from '../shared/SectionHeading';
import ServiceCard from '../shared/ServiceCard';
import { services } from '../../data/services';

export default function ServicesPreview() {
  const previewServices = services.slice(0, 6);

  return (
    <section className="section-padding">
      <SectionHeading 
        badge="Our Expertise"
        title="Comprehensive Dental Services"
        subtitle="We offer a wide range of dental treatments using state-of-the-art technology to ensure you get the best care possible."
      />
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {previewServices.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
      
      <div className="mt-16 text-center">
        <Link to="/services" className="btn-secondary">
          View All Services
        </Link>
      </div>
    </section>
  );
}
