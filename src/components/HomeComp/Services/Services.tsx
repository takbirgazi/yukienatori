import SectionHeader from "@/components/CommonComp/SectionHeader/SectionHeader";
import ServicesCard from "./ServicesCard/ServicesCard";

const Services = () => {
    const headingData = {
        heading: "SERVICES WE OFFER",
        textColor: "black"
    };
    const servicesData = [
        {
            id: 1,
            imageUrl: "https://yukienatori-newyork.com/wp-content/uploads/2025/01/spa-nyc-yukie.jpg",
            title: "SPA",
            slag: '/'
        },
        {
            id: 2,
            imageUrl: "https://yukienatori-newyork.com/wp-content/uploads/2025/01/nail-nyc-yukie.jpg",
            title: "NAIL",
            slag: '/'
        },
        {
            id: 3,
            imageUrl: "https://yukienatori-newyork.com/wp-content/uploads/2025/01/hair-nyc-yukie.jpg",
            title: "HAIR",
            slag: '/'
        }
    ]
    return (
        <div>
            <SectionHeader SectionHeaderData={headingData} />
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pb-5 md:pb-9">
                {
                    servicesData.map(service => <ServicesCard key={service.id} ServicesCardData={service} />)
                }
            </div>
        </div>
    );
};

export default Services;