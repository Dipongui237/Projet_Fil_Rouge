import React, { useState } from 'react';
import { usePage } from '@inertiajs/react';
import HeaderSecond from '@/components/HeaderSecond';
import Footer from '@/components/Footer';
import AgencySelector from '@/components/AgencySelector';
import PricingPlans from '@/components/PricingPlans';
import ReservationForm from '@/components/ReservationForm';
import SeatSelection from '@/components/SeatSelection';
import PaymentConfirmation from '@/components/PaymentConfirmation';
import TicketDownload from '@/components/TicketDownload';
import { PageProps } from '@/types';

const Reservation: React.FC<PageProps> = () => {
    const { auth } = usePage<PageProps>().props;
    const [step, setStep] = useState(1);
    const [selectedAgency, setSelectedAgency] = useState(null);
    const [selectedPlan, setSelectedPlan] = useState(null);
    const [reservationDetails, setReservationDetails] = useState(null);
    const [selectedSeats, setSelectedSeats] = useState([]);
    const [paymentConfirmed, setPaymentConfirmed] = useState(false);

    const handleAgencySelect = (agency: any) => {
        setSelectedAgency(agency);
        setStep(2);
    };

    const handlePlanSelect = (plan: any) => {
        setSelectedPlan(plan);
        setStep(3);
    };

    const handleReservationSubmit = (details: any) => {
        setReservationDetails(details);
        setStep(4);
    };

    const handleSeatSelection = (seats: string[]) => {
        setSelectedSeats(seats);
        setStep(5);
    };

    const handlePaymentConfirm = () => {
        setPaymentConfirmed(true);
        setStep(6);
    };

    const handleBack = () => {
        if (step > 1) setStep(step - 1);
    };

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col">
            <HeaderSecond currentStep={step} />
            <main className="flex-grow py-8">
                {step === 1 && <AgencySelector onSelect={handleAgencySelect} />}
                {step === 2 && <PricingPlans onSelect={handlePlanSelect} onBack={handleBack} />}
                {step === 3 && <ReservationForm onSubmit={handleReservationSubmit} onBack={handleBack} />}
                {step === 4 && <SeatSelection selectedPlan={selectedPlan} onSelect={handleSeatSelection} onBack={handleBack} />}
                {step === 5 && (
                    <PaymentConfirmation
                        agency={selectedAgency}
                        plan={selectedPlan}
                        details={reservationDetails}
                        seats={selectedSeats}
                        onConfirm={handlePaymentConfirm}
                        onBack={handleBack}
                        paymentConfirmed={paymentConfirmed}
                    />
                )}
                {step === 6 && (
                    <TicketDownload
                        agency={selectedAgency}
                        plan={selectedPlan}
                        details={reservationDetails}
                        seats={selectedSeats}
                        onBack={handleBack}
                    />
                )}
            </main>
            <Footer />
        </div>
    );
};

export default Reservation;