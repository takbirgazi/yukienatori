import SectionHeader from "@/components/CommonComp/SectionHeader/SectionHeader";
import BookingForm from "./BookingForm/BookingForm";

const Booking = () => {
    const headingData = {
        heading: "ONLINE BOOKING",
        textColor: "white"
    };

    return (
        <div>
            <SectionHeader SectionHeaderData={headingData} />
            <div>
                <BookingForm />
            </div>
        </div>
    );
};

export default Booking;