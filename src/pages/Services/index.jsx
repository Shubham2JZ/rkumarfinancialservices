import { useParams } from "react-router-dom";
import ServiceComponent from "../../components/ServiceComponent";
import servicesData from "../../data/services";

const Services = () => {
  const { serviceSlug } = useParams();
  const data = servicesData[serviceSlug];

  if (!data) {
    return <div style={{ padding: "2rem" }}>Service not found.</div>;
  }

  return <ServiceComponent title={data.title} sections={data.sections} />;
};

export default Services;
